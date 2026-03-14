import { createEffect, createSignal } from "solid-js";

const Morpher = () => {
  const [state, setState] = createSignal({
    text: "Freedom",
    words: [
      "自由市场",
      "Masoko huria",
      "Свобода",
      "Mercado gratuito",
      "دولت محدود",
      "Vabadus",
      "個人の自由",
      "حرية",
      "मुक्त बाजार",
      "Kāwanatanga iti",
      "Эрх чөлөө",
      "Ազատություն",
      "Mākeke kūʻokoʻa",
      "자유 시장",
      "چەكلىك ھۆكۈمەت",
      "Takmörkuð stjórnvöld",
      "Freedom",
    ],
  });
  let morphTimeout: number | undefined;
  let isAnimating = false;

  // loops over chars to morph a text to another
  const morpher = (start: string, end: string): void => {
    // array of chars to randomly morph the text between start and end
    const chars = [
      "a",
      "b",
      "c",
      "d",
      "x",
      "y",
      "z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "{",
      "}",
      "%",
      "$",
      "?",
      "!",
    ];
    // duration of the global morph
    const duration = 4;
    // speed of the morph for each letter
    const frameRate = 30;

    // text variables
    const textString = start.split("");
    const result = end.split("");
    const slen = textString.length;
    const rlen = result.length;

    // time variables
    let present = new Date();
    let past = present.getTime();
    let count = 0;
    let spentTime = 0;
    const maxLen = Math.max(slen, rlen);
    // splitTime = milliseconds / letters
    const splitTime = (duration * 70) / maxLen;

    if (morphTimeout !== undefined) {
      clearTimeout(morphTimeout);
      morphTimeout = undefined;
    }
    isAnimating = true;

    function update() {
      // Update present date and spent time
      present = new Date();
      spentTime += present.getTime() - past;

      // Random letters
      for (let i = count; i < maxLen; i++) {
        const random = Math.floor(Math.random() * (chars.length - 1));
        // Change letter
        textString[i] = chars[random];
      }

      // Morph letters from start to end
      if (spentTime >= splitTime) {
        // Update count of letters to morph
        count += Math.floor(spentTime / splitTime);
        // Morphing
        for (let j = 0; j < count; j++) {
          textString[j] = result[j] || "";
        }
        // Reset spent time
        spentTime = 0;
      }

      // Update DOM
      setState({ ...state(), text: textString.join("") });

      // Save present date
      past = present.getTime();

      // Loop
      if (count < maxLen) {
        // Only use a setTimeout if the frameRate is lower than 60FPS
        // Remove the setTimeout if the frameRate is equal to 60FPS
        morphTimeout = window.setTimeout(() => {
          window.requestAnimationFrame(update);
        }, 1000 / frameRate);
      } else {
        isAnimating = false;
        morphTimeout = undefined;
      }
    }

    // Start loop

    update();
  };

  createEffect(() => {
    let counter = 0;

    const morphInterval = setInterval(() => {
      if (isAnimating) {
        return;
      }

      const start = state().text;
      const end = state().words[counter];

      morpher(start, end);

      if (counter < state().words.length - 1) {
        counter++;
      } else {
        counter = 0;
      }
    }, 3000);

    return () => {
      clearInterval(morphInterval);
      if (morphTimeout !== undefined) {
        clearTimeout(morphTimeout);
      }
    };
  });

  return (
    <div class="lg:text-3xl">
      <span class="">{state().text}</span>
    </div>
  );
};

export default Morpher;
