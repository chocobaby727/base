# https://www.doctave.com/blog/python-export-fastapi-openapi-spec#step-3-export-openapi-spec-from-fastapi
import sys
from pathlib import Path
from typing import Optional, cast

import typer
import yaml
from fastapi import FastAPI
from uvicorn.importer import import_from_string


def main(app_path: Optional[str] = None, output_dir: str = "docs") -> None:
    """openapi.yaml を export する

    Args: \n
        app_path (Optional[str], optional): カレントディレクトリから出力対象までのパス. Defaults to None. \n
        output_dir (str, optional): カレントディレクトリから見た出力先のディレクトリ名. Defaults to "docs". \n

    Raises: \n
        ValueError: _description_
    """
    if not app_path:
        raise ValueError("hoge")

    working_dir = Path().cwd()

    print(f"adding {working_dir} to sys.path")

    sys.path.insert(0, working_dir.as_posix())

    print(f"importing app from {working_dir / app_path}")

    app = cast(FastAPI, import_from_string(app_path))
    openapi = app.openapi()
    version = openapi.get("openapi", "unknown version")

    print(f"writing openapi spec v{version}")

    output_path = working_dir / output_dir / "openapi.yaml"

    with open(output_path, "w") as f:
        yaml.dump(openapi, f, sort_keys=False)

    print(f"spec written to {output_path}")


if __name__ == "__main__":
    typer.run(main)
