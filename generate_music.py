#!/usr/bin/env python3
"""
Music generation helper for 鐵槌老妹分身
Usage: python3 generate_music.py "your music prompt here" [output_file.mp3]
"""
import sys
import os
import requests

KEYS_FILE = os.path.join(os.path.dirname(__file__), ".keys")

def load_key(name):
    with open(KEYS_FILE) as f:
        for line in f:
            if name in line.lower():
                return line.split(":", 1)[1].strip()
    return None

def generate_music(prompt: str, output_path: str = "/tmp/music.mp3", duration_ms: int = 30000):
    api_key = load_key("eleven")
    if not api_key:
        print("ERROR: ElevenLabs API key not found in .keys", file=sys.stderr)
        sys.exit(1)

    print(f"generating music: {prompt}")
    r = requests.post(
        "https://api.elevenlabs.io/v1/music/compose",
        headers={"xi-api-key": api_key, "Content-Type": "application/json"},
        json={"prompt": prompt, "music_length_ms": duration_ms},
        timeout=120,
    )
    if r.status_code != 200:
        print(f"ERROR: {r.status_code} {r.text}", file=sys.stderr)
        sys.exit(1)

    with open(output_path, "wb") as f:
        f.write(r.content)
    print(f"done! saved to {output_path} ({len(r.content)//1024}KB)")
    return output_path

if __name__ == "__main__":
    prompt = sys.argv[1] if len(sys.argv) > 1 else "upbeat cheerful electronic music"
    out = sys.argv[2] if len(sys.argv) > 2 else "/tmp/music.mp3"
    generate_music(prompt, out)
