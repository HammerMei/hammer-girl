const { ElevenLabs } = require("@elevenlabs/client");

const apiKey = "sk_a7367ee8316eb51d5bc67e1ab99011814111c1f91b12d181";

async function main() {
  const client = new ElevenLabs(apiKey);

  console.log("🎵 開始生成音樂...");

  const audio = await client.music.compose({
    prompt: "upbeat electronic dance music with energetic synths",
    music_length_ms: 30000,
  });

  let buffer = Buffer.alloc(0);
  for await (const chunk of audio) {
    buffer = Buffer.concat([buffer, chunk]);
  }

  require('fs').writeFileSync("test_music.mp3", buffer);
  console.log("✅ 音樂生成完成！存到 test_music.mp3");
}

main().catch(console.error);