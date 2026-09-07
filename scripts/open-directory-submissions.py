"""
Open BrandOps submission URLs in default browser.
This script launches the submit pages for each directory in your browser.
It also copies the BrandOps description to your clipboard for easy pasting.

Usage:
    python scripts/open-directory-submissions.py

You will still need to:
    - Complete registration/email verification
    - Solve any CAPTCHA
    - Paste the description and submit manually
"""

import webbrowser
import json
import subprocess
from pathlib import Path

KIT_PATH = Path("output/backlink-campaign/brandops-directory-submission-kit.json")

def copy_to_clipboard(text: str) -> None:
    """Copy text to macOS clipboard."""
    subprocess.run(["pbcopy"], input=text.encode("utf-8"), check=True)


def main():
    kit = json.loads(KIT_PATH.read_text())
    directories = kit["directories"]
    brand = kit["brand"]

    # Copy 200-char description to clipboard
    copy_to_clipboard(brand["short_description_200"])
    print("Copied 200-char description to clipboard.")
    print(f"Opening {len(directories)} directory submission pages...\n")

    for d in sorted(directories, key=lambda x: x["priority"]):
        print(f"[{d['priority']}] {d['name']} — {d['submit_url']}")
        webbrowser.open(d["submit_url"], new=2)

    print("\nDone. Paste the description into each form and complete submission.")


if __name__ == "__main__":
    main()
