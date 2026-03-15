import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

export interface LastRevisedInfo {
  iso: string;
  label: string;
}

const repoRoot = fileURLToPath(new URL("../../", import.meta.url));

export function getLastRevised(
  relativeFilePath: string,
): LastRevisedInfo | null {
  try {
    const iso = execFileSync(
      "git",
      ["log", "-1", "--follow", "--format=%cI", "--", relativeFilePath],
      {
        cwd: repoRoot,
        encoding: "utf-8",
      },
    ).trim();

    if (!iso) {
      return null;
    }

    const revisedAt = new Date(iso);

    if (Number.isNaN(revisedAt.getTime())) {
      return null;
    }

    return {
      iso: revisedAt.toISOString(),
      label: new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
        revisedAt,
      ),
    };
  } catch {
    return null;
  }
}
