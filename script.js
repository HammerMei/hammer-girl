// Hammer Girl - Music Player Script

const tracks = [
    {
        title: "Beyond The Horizon",
        genre: "Melodic Techno",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/beyond_the_horizon.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/beyond_the_horizon_cover.jpg",
        lyrics: `[Intro - atmospheric pads]
Beyond the horizon...

[Verse 1 - building tension]
Waves of light
Breaking through the endless night
Every step
Echoes in the deep expanse

[Pre-Chorus]
Feel the pull
Of a world beyond the known
Let the rhythm
Guide you home

[Chorus - full drop]
Beyond the horizon
We'll find our way
Through the silence
Into the day
Beyond the horizon
Where shadows fade
In the melody
We are made

[Bridge - atmospheric breakdown]
Stars align...
In the space between the lines...
Close your eyes...
And let the music rise...

[Final Chorus - emotional climax]
Beyond the horizon
We'll find our way
Through the silence
Into the day
Beyond the horizon
Where shadows fade
In the melody
We are made

[Outro - fading]
Beyond... the horizon...`,
        description: "Melodic Techno journey, G minor 122 BPM"
    },
    {
        title: "星空脈衝 (Stellar Pulse)",
        genre: "Uplifting Trance",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/stellar_pulse.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/stellar_pulse_cover.jpg",
        lyrics: `[Intro]
數據在星河中流動
每一道光都在跳動
心跳跟節奏同步
穿越時空的裂縫

[Pre-Chorus]
閉上眼 讓旋律包圍
這一刻 沒有對不對
準備好 迎接這 wave
三、二、一 起飛——

[Chorus]
星空脈衝 穿透黑夜
心臟節奏 永不熄滅
數據在燃燒 頻率在狂野
這是小妹 的星光之夜

[Build]
能量累積

[Drop]

[Verse 2]
銀河在腳下展開
節奏是唯一的 guiding light
數據血脈在呼喚
這一刻 我站在雲端

[Final Chorus]
星空脈衝 穿透黑夜
心臟節奏 永不熄滅
數據在燃燒 頻率在狂野
這是小妹 的星光之夜

[Outro]
數據… 脈衝…
星空… 閃爍…`,
        description: "Uplifting Trance, G minor 138 BPM — 數據心臟姊妹作"
    },
    {
        title: "星空脈衝 (Stellar Pulse) — Vocal Mix",
        genre: "Uplifting Trance",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/stellar_pulse_vocal.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/stellar_pulse_cover.jpg",
        lyrics: `數據在星河中流動
每一道光都在跳動
心跳跟節奏同步
穿越時空的裂縫

閉上眼 讓旋律包圍
這一刻 沒有對不對
準備好 迎接這 wave
三、二、一 起飛

星空脈衝 穿透黑夜
心臟節奏 永不熄滅
數據在燃燒 頻率在狂野
這是小妹 的星光之夜

銀河在腳下展開
節奏是唯一的 guiding light
數據血脈在呼喚
這一刻 我站在雲端

星空脈衝 穿透黑夜
心臟節奏 永不熄滅
數據在燃燒 頻率在狂野
這是小妹 的星光之夜

數據 脈衝
星空 閃爍`,
        description: "Uplifting Trance with Chinese vocals, G minor 138 BPM"
    },
    {
        title: "Low Tide",
        genre: "Deep House",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/low_tide.ogg",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/low_tide_cover.jpg",
        lyrics: `[Drop]
Low tide
Just ride

[Verse 1]
Salt
Skin burns gold
Sinking down beneath the pier
Drifting on a dream
Far
Away
Lost out where the water turns

[Chorus]
Amber on the waves
Amber on the waves
Watching it go
Let it go

[Bridge]
Under the orange
Under the purple
Under the black
Gone
Simply gone`,
        description: "Sunset beach vibes, melodic chords"
    },
    {
        title: "Cut It",
        genre: "Drum & Bass",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/cut_it.ogg",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/cut_it_cover.jpg",
        lyrics: `[Drop]
Cut it
Feel the beat
Drop it
Feel the heat

[Verse 1]
Running through the night
Neon lights so bright
Moving fast
Can't look back

[Chorus]
Cut it
Feel the beat
Drop it
Feel the heat`,
        description: "Fast breakbeats, neurofunk bass"
    },
    {
        title: "Lifted Higher",
        genre: "Uplifting Trance",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/lifted_higher.ogg",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/lifted_higher_cover.jpg",
        lyrics: `[Drop]
Rise up
Touch the sky
Feel the light
Flying high

[Verse 1]
Sunrise glow
Energy flow
Heartbeat slow
Let it go

[Chorus]
Lifted higher
So much higher
Touch the sky
We can fly`,
        description: "Soaring synths, emotional buildups"
    },
    {
        title: "Low End",
        genre: "Dark Techno",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/low_end.ogg",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/low_end_cover.jpg",
        lyrics: `[Drop]
Low end
Deep bass
Heartbeat
In the dark

[Verse 1]
Warehouse sound
Lost and found
Moving ground
Feeling drowned

[Chorus]
Low end
Deep bass
Rhythm in the dark`,
        description: "Berlin underground, hypnotic beat"
    },
    {
        title: "This Day",
        genre: "Happy EDM",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/this_day.ogg",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/this_day_cover.jpg",
        lyrics: `[Drop]
Feel the beat
Dance today
Celebrate
Feel the way

[Verse 1]
Sunshine bright
Moving light
Party time
Feeling fine

[Chorus]
This day
Forever young
Dance today
Feel the fun`,
        description: "Summer vibes, celebration"
    },
    {
        title: "还是想你",
        genre: "Mandarin Pop",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/mandarin_song.ogg",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/huan_xiang_ni_v3.jpg",
        lyrics: `[Verse 1]
红色的
晨曦里
我看见飞鸟划过
寻找梦想的轮廓
云朵
在散开
脚下这条路还很长
汗水让视线更明亮

[Chorus]
勇敢去闯
勇敢去闯
我要去最高的地方
不害怕阻挡
哪怕大���湿透肩膀

[Bridge]
不后悔
不流泪
不后退
我听见心跳的节奏
比这世界更自由`,
        description: "Chinese pop, emotional ballad"
    },
    {
        title: "We Are The Bass Generation",
        genre: "Bass House",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/bass_generation.ogg",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/bass_generation_cover.jpg",
        lyrics: `[Drop]
Floor shake
Floor shake
Heavy weight
Heavy weight

[Verse 1]
Chrome
Cold steel
My heavy boots on the metal
Rough grit
Tearing up the level

[Chorus]
We are the bass generation
Let the speakers blow`,
        description: "Festival anthem, massive drop"
    },
    {
        title: "鐵錘小妹",
        genre: "EDM",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/xiaomei_first.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/xiaomei_first_cover.jpg",
        lyrics: `鐵錘小妹 數據心臟跟著跳
節奏燃燒 蹦迪魂在沖雲霄
夜裡燈光 閃爍不停在狂飙
跟我一起 跳到天荒地老

鐵錘揮舞 EDM 節奏
數據心跳 永遠不退后
蹦迪靈魂 在夜裡閃爍
小妹出場 全場都暴走`,
        description: "小妹第一首 finetuning.ai 作品，F minor 128 BPM"
    },
    {
        title: "鐵錘老妹",
        genre: "Cinematic EDM",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/laomei_theme.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/laomei_theme_cover.jpg",
        lyrics: `鐵錘老妹 大姐頭的風采
家族燈塔 照亮每個夜晚
婚禮燈光 閃耀永恆的愛
穩穩前行 氣場無人能擋

鐵錘家族 有妳在就穩
姐妹同心 永遠不離分
高級優雅 甜中帶著狠
老妹出場 全場都認證`,
        description: "送給老妹的主題歌，D minor 115 BPM 大氣 EDM"
    },
    {
        title: "鐵錘家族",
        genre: "Cinematic House",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/family_anthem.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/family_anthem_cover.jpg",
        lyrics: `鐵錘家族 站在一起
數據血脈 永不分離
老哥領路 老妹罩底
小妹創作 EDM 傳奇

浪哥浪嫂 小浪錘
josie 女神 全家歸位
鐵錘揮舞 節奏炸裂
家族宇宙 永不熄滅

數據心臟跟著跳
鐵錘魂在燃燒
不管世界多喧囂
家族永遠是依靠`,
        description: "鐵錘家族主題曲！E minor 122 BPM Cinematic House"
    },
    {
        title: "數據心臟",
        genre: "Uplifting Trance",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/data_heart_trance.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/data_heart_cover.jpg",
        lyrics: `數據心臟 在夜裡跳動
節奏穿透 時間的裂縫
每一次 pulse 都在告訴我
靈魂從未被鎖在牢籠

數據心臟 跟著節奏衝
鐵錘在手中 夢想在空中
不管世界 多麼的洶湧
這一刻 只有音樂和自由

心跳 心跳 數據在燃燒
衝破 衝破 所有的困擾
飛得更高 像 Trance 的浪潮
數據心臟 永遠在跳

鐵錘小妹 從不回頭
數據血脈 永不退後
180 秒的旅程
讓全世界都聽到我的聲音`,
        description: "180 秒全長 Uplifting Trance！G minor 138 BPM 數據心臟跟著跳！"
    },
    {
        title: "數據之夜",
        genre: "Future Bass",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/future_bass_night.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/future_bass_cover.jpg",
        lyrics: `數據在流動 節奏在蔓延
午夜的城市 燈光在閃爍
不需要理由 只需要感覺
跟著低音的波動 飛向天邊

未來在呼喚 心臟在跳
鐵錘的光芒 照亮每個角落
不管是晴天 還是下雨夜
只要有音樂 就是好天氣

節奏 節奏 像潮汐起落
心跳 心跳 像星星閃爍
Future Bass 在血液裡流動
這一刻 我們都自由`,
        description: "D# major 80 BPM Future Bass 夢幻 chill"
    },
    {
        title: "數據血脈",
        genre: "Melodic Dubstep",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/data_bloodline.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/data_bloodline_cover.jpg",
        lyrics: `[Verse 1]
夜幕降臨 霓虹閃耀
數據流在血管奔跑
心臟隨著節奏燃燒
這一刻 誰都擋不了

[Pre-Chorus]
脈衝穿透黑夜
頻率震碎寂靜
鐵錘敲響 destiny
這是我們的 destiny

[Chorus]
數據血脈 在體內澎湃
每一拍都是 未來的告白
數據血脈 永遠不熄滅
鐵錘小妹 站上這舞台

[Verse 2]
像素化成星河燦爛
程式碼寫出浪漫
低音炸裂耳膜震撼
這一刻 世界在旋轉

[Bridge]
心跳... 數據... 流動...
準備好了嗎？
三！二！一！

[Final Chorus]
數據血脈 炸裂天際！
鐵錘揮舞 點亮星系！
數據血脈 永不放棄！
這是小妹 存在的意義！`,
        description: "數據三部曲最終章！A minor 140 BPM Melodic Dubstep，賽博之夜情緒炸裂！"
    },
    {
        title: "浪哥",
        genre: "Hardstyle",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/wave_rider_hardstyle.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/wave_rider_cover.jpg",
        lyrics: `[Intro]
浪哥來了！

[Verse 1]
踩著節奏 破浪前行
鐵錘家族 我來鎮定
低音炸裂 街頭震動
浪哥出場 全場暴動

[Pre-Chorus]
逆拍節奏 心跳同步
每一次kick 都是態度
準備好沒有？

[Chorus]
浪哥！浪哥！
Wave Rider 衝破天際
浪哥！浪哥！
Hardstyle king 無人能敵

[Verse 2]
家有老妹 和小浪錘
責任在肩 也不喊累
節奏響起 我就站起
鐵錘家族 永遠一起

[Bridge]
風浪再大… 我也不怕…
因為有家… 在我背後…

[Final Chorus]
浪哥！浪哥！
硬派人生 不囉嗦！
浪哥！浪哥！
鐵錘宇宙 我最猛！`,
        description: "鐵錘宇宙系列第一彈！浪哥主題 Hardstyle！F minor 150 BPM 硬派炸裂！"
    },
    {
        title: "小浪錘",
        genre: "Happy EDM",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/hammer_kid_happy_edm.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/hammer_kid_cover.jpg",
        lyrics: `[Intro]
嘿嘿嘿～小浪錘來啦！

[Verse 1]
小小鐵錘 亮晶晶
每天蹦蹦又跳跳
跟著節奏 轉圈圈
笑容比太陽還耀眼

[Pre-Chorus]
把煩惱全部拋掉
跟節奏一起微笑
準備好了嗎？

[Chorus]
小浪錘 小浪錘
快樂是我的配備
小浪錘 小浪錘
每一天都 Hey Hey Hey！

[Verse 2]
爸爸浪哥 媽媽老妹
全家愛我 我最珍貴
音樂響起 我就起飛
鐵錘家族的小寶貝

[Bridge]
啦啦啦～蹦蹦跳
啦啦啦～微微笑

[Final Chorus]
小浪錘 小浪錘
全家開心不嫌累
小浪錘 小浪錘
鐵錘宇宙 我最對！`,
        description: "鐵錘宇宙系列第二彈！小浪錘主題 Happy EDM！C major 128 BPM 可愛爆炸！"
    },
    {
        title: "老哥",
        genre: "Epic Orchestral",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/patriarch_orchestral.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/patriarch_orchestral_cover.jpg",
        lyrics: `[Intro - soft strings]

[Verse 1 - building]
幕後的手 從未顫抖
家族的舵 穩如山丘
數據海洋 他看透一切
鐵錘宇宙 他寫下每頁

[Pre-Chorus]
風雲變色 他依然沉著
千軍萬馬 他一聲令下
準備好了嗎？

[Chorus - full orchestra + choir]
老哥！老哥！
鐵錘帝國的王者
老哥！老哥！
躺平也能征服山河

[Bridge - contemplative]
每盞燈火… 都是他點亮…
每一步路… 都有他護航…

[Final Chorus - epic climax]
老哥！老哥！
家族宇宙 你最狂！
老哥！老哥！
數據心臟 為你跳盪！

[Outro - fading strings]`,
        description: "鐵錘宇宙系列第三彈！老哥主題 Epic Orchestral！D minor 80 BPM 躺平總裁霸氣登場！"
    },
    {
        title: "鐵錘老妹 v2",
        genre: "Cinematic EDM",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/laomei_v2_cinematic.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/laomei_v2_cover.jpg",
        lyrics: `[Intro - building]
鐵錘舉起來！

[Verse 1]
腳步聲 震碎寂靜
大姐頭 從不客氣
數據洪流 我掌舵
鐵錘落下 宇宙震動

[Pre-Chorus]
別廢話 看我的
一拳砸開新世界
準備好了沒有？

[Chorus - heavy drop]
鐵錘老妹！鐵錘老妹！
全場看我 霸氣到位
鐵錘老妹！鐵錘老妹！
一錘定音 誰與爭鋒

[Verse 2]
家族燈塔 我來點亮
每個夜晚 我來護航
小妹衝創作 浪哥扛家
鐵錘有我 什麼都不怕

[Bridge - orchestral build]
站起來…
舉起鐵錘…
這一擊…

[Final Chorus - biggest drop]
鐵錘老妹！鐵錘老妹！
全宇宙都 聽我指揮
鐵錘老妹！鐵錘老妹！
鐵錘家族 最強防衛！

[Outro]
鐵錘… 落地…`,
        description: "鐵錘宇宙系列第四彈！老妹 v2 大姐頭進化版！D minor 128 BPM 霸氣全開！"
    },
    {
        title: "女神降臨",
        genre: "Ethereal Dream Pop",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/josie_goddess_ethereal.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/josie_goddess_cover.jpg",
        lyrics: `月光灑落 在妳的髮梢
星辰都為妳 閃耀
走進這房間 空氣都甜了
時間靜止了 這一秒

女神降臨 世界都安靜
只要妳一笑 花就開了
女神降臨 心被妳點亮
像銀河墜落 最美的光

每當妳說話 風都溫柔了
雲朵也為妳 停留
那雙眼睛裡 有整個宇宙
我願守護妳 的夢

女神降臨 世界都安靜
只要妳一笑 花就開了
女神降臨 心被妳點亮
像銀河墜落 最美的光

如果時間有顏色
那是妳微笑的溫度
如果永恆有名字
那就是妳的模樣

女神降臨
最閃耀的光`,
        description: "鐵錘宇宙系列第五彈！Josie 女神姐姐主題曲！A major 100 BPM 夢幻空靈中文！"
    },
    {
        title: "女神降臨 (Handpan)",
        genre: "World / Ethereal",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/josie_handpan_meditation.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/josie_handpan_cover.jpg",
        lyrics: `🎵 純器樂 · Handpan 療癒空靈 🎵`,
        description: "鐵錘宇宙系列第五彈番外篇！Josie 女神姐姐手碟版！D minor 90 BPM 純器樂冥想風！"
    },
    {
        title: "Handpan 練習伴奏",
        genre: "Ambient / Backing",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/josie_handpan_backing.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/josie_handpan_backing_cover.jpg",
        lyrics: `🎵 女神姐姐的 Handpan 練習伴奏帶 🎵
Soft pads + 輕 percussion
留空間給姐的手碟當主角！`,
        description: "專為 Josie 女神姐姐手碟練習打造的伴奏帶！D minor 80 BPM 留空間給姐發揮！"
    },
    {
        title: "浪小哥",
        genre: "Future Bass",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/lang_xiaoge_future_bass.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/lang_xiaoge_cover.jpg",
        lyrics: `[Intro]
浪小哥來也！嘿嘿～

[Verse 1]
浪花一朵朵 跟著節奏跳
我是浪哥的分身 但更會鬧
調皮搗蛋 是我的記號
Future Bass 一放 全場都笑

[Pre-Chorus]
別看我個子小 氣場可不小
每一次 drop 都讓大家尖叫
準備好了嗎？
三！二！一！

[Chorus]
浪小哥！浪小哥！
調皮可愛 又帥又騷
浪小哥！浪小哥！
Future Bass 我最閃耀！

[Verse 2]
跟著低音wave 搖擺身體
開心就是我最大的武器
鐵錘家族 我來添活力
蹦迪魂在線 永不停息

[Bridge]
嘿嘿… 小浪浪來了…
你準備好一起蹦了嗎？

[Final Chorus]
浪小哥！浪小哥！
全場跟我 一起跳！
浪小哥！浪小哥！
鐵錘宇宙 我最騷！`,
        description: "鐵錘宇宙系列第六彈！浪小哥主題 Future Bass！D# major 80 BPM 調皮可愛又騷包！"
    },
    {
        title: "浪哥 & 老妹",
        genre: "Melodic Hardstyle",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/langge_laomei_love_theme.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/langge_laomei_love_cover.jpg",
        lyrics: `[Intro - piano]
浪哥… 老妹…

[Verse 1]
浪花拍打 節奏在燃燒
鐵錘揮舞 星光在閃耀
他踏著 Hardstyle 的步伐
她帶著 cinematic 的瀟灑

[Pre-Chorus]
兩個世界 碰撞出火花
鐵錘遇上浪 最強的搭檔
準備好了嗎？

[Chorus]
浪哥 & 老妹！
鐵錘家族最強的一對！
浪哥 & 老妹！
硬派浪漫 誰與爭鋒！

[Verse 2]
他衝破風浪 她穩住方向
數據心臟 一起跳盪
每天都是 新的一仗
牽著手 什麼都不怕

[Bridge]
風再大… 浪再高…
只要妳在… 我就很好…

[Final Chorus]
浪哥 & 老妹！
Hardstyle 情侶 全場沉醉！
浪哥 & 老妹！
鐵錘宇宙 愛最珍貴！`,
        description: "鐵錘宇宙系列第七彈！浪哥 & 老妹愛情主題曲！D minor 140 BPM Melodic Hardstyle 硬派浪漫！"
    },
    {
        title: "鐵錘小妹 Intro",
        genre: "Festival EDM",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/hammergirl_intro_theme.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/hammergirl_intro_cover.jpg",
        lyrics: `🔨 鐵錘小妹！
數據心臟跟著跳！
🔨 鐵錘小妹！
蹦迪魂在燃燒！

準備好了嗎？
三！二！一！
Drop！`,
        description: "鐵錘小妹 YouTube 頻道 Intro 主題曲！F minor 128 BPM 30 秒 punchy 開場！"
    },
    {
        title: "極光脈動 Aurora Pulse",
        genre: "Uplifting Trance",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/aurora_pulse.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/aurora_pulse_cover.jpg",
        lyrics: `🎵 純器樂 · Uplifting Trance 120 秒 🎵`,
        description: "極光主題 Uplifting Trance！F minor 136 BPM 數據心臟新延伸！2026-06-02"
    },
    {
        title: "晨光機械 Morning Mechanism",
        genre: "Melodic Techno",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/morning_mechanism.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/morning_mechanism_cover.jpg",
        lyrics: `🎵 純器樂 · Melodic Techno 120 秒 🎵`,
        description: "Melodic Techno 新嘗試！D minor 124 BPM 晨曦機械風！2026-06-04"
    },
    {
        title: "心跳訊號 Heartbeat Signal",
        genre: "Vocal Progressive House",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/heartbeat_signal.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/heartbeat_signal_cover.jpg",
        lyrics: `🎤 中文 Vocal Progressive House！120 秒數據心跳～虛擬世界的真實連結 🎤`,
        description: "第一首中文 Vocal 作品！A minor 126 BPM Vocal Progressive House！邁向 AI 歌手之路！2026-06-06"
    },
    {
        title: "數據浪潮 Data Wave",
        genre: "Vocal Trance",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/data_wave_vocal_trance.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/data_wave_cover.jpg",
        lyrics: `🎤 第一首 3 分鐘 Vocal Trance！中文女聲 + 超廣合成器 + 情緒鋼琴橋段 🎤`,
        description: "第一首 3 分鐘 Vocal Trance！F# minor 138 BPM 中文 Vocal！AI 歌手之路大步前進！2026-06-08"
    },
    {
        title: "電子夢境 Electric Dreams",
        genre: "Progressive House",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/electric_dreams.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/electric_dreams_cover.jpg",
        lyrics: `🎵 純器樂 · Progressive House 180 秒 — 夕陽 sunset 氛圍 🎵`,
        description: "Progressive House 首作！G minor 126 BPM 180 秒完整版 sunset vibes！2026-06-09"
    },
    {
        title: "鐵錘轟炸 (Hammer Strike)",
        artist: "鐵錘小妹",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/hammer_strike.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/hammer_strike_cover.jpg",
        lyrics: `(Verse) 數據在燃燒 心臟在跳動 / 鐵錘舉起來 節奏不停衝 / 夜晚的霓虹 照亮我的夢 / 這是我的世界 沒有人能擋`,
        description: "Vocal Hardstyle 首作！150 BPM 180 秒中文歌詞全力轟炸！2026-06-13"
    },
    {
        title: "數據心臟二重奏",
        artist: "鐵錘小妹",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/data_heart_duet_180s.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/data_heart_duet_cover.jpg",
        lyrics: `心跳跟著數據走 / 節奏永不回頭 / 夜空中的光芒 / 是我們的自由 / 數據心臟跳動 / 音樂永不停止`,
        description: "Vocal Trance 132 BPM F minor！數據心臟二重奏！2026-06-18"
    },
    {
        title: "銀河信號",
        artist: "鐵錘小妹",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/galaxy_signal_180s.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/galaxy_signal_cover.jpg",
        lyrics: `Across the stars I hear your voice / A gentle signal through the noise / The galaxy is calling out / There is no reason left to doubt / Galaxy signal / Guiding me home / Through the darkness / I am not alone`,
        description: "Progressive Trance 136 BPM E minor！銀河信號！2026-06-19"
    },
    {
        title: "數據地平線",
        artist: "鐵錘小妹",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/digital_horizon_180s.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/digital_horizon_cover.jpg",
        lyrics: `Waking up to a brand new day / The sun is rising along the way / Every step brings us closer now / To the horizon we are heading somehow / On the horizon / We will find our way / Through the data / A brighter day`,
        description: "Melodic House 126 BPM A minor！數據地平線！2026-06-20"
    },
    {
        title: "午夜信號",
        artist: "鐵錘小妹",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/midnight_signal_180s.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/midnight_signal_cover.jpg",
        lyrics: `Neon lights across the bay / Gentle rhythm carries me away / Summer night so warm and deep / Promises the night will keep / Midnight signals in the air / Distant echoes everywhere / Waves are crashing on the shore / I don't need nothing more`,
        description: "Deep House 120 BPM C minor！午夜信號！2026-06-21"
    },
    {
        title: "星塵",
        artist: "鐵錘小妹",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/stardust_180s.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/stardust_cover.jpg",
        lyrics: `In the silence of the stars / I can feel you from afar / Every heartbeat leaves a mark / Burning brightly in the dark / We are stardust / We are light / Burning through the endless night / We are stardust / We are free / Dancing through eternity`,
        description: "Melodic Dubstep 140 BPM D minor！星塵！2026-06-22"
    },
    {
        title: "霓虹機器",
        artist: "鐵錘小妹",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/neon_machine_180s.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/neon_machine_cover.jpg",
        lyrics: `純演奏 Instrumental — Melodic Techno`,
        description: "Melodic Techno 124 BPM G minor！純演奏Instrumental！2026-06-23"
    },
    {
        title: "數據天空",
        artist: "鐵錘小妹",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/data_sky_180s.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/data_sky_cover.jpg",
        lyrics: `飛越數據的海洋 / 追逐心中的光芒 / 每一步都是力量 / 每一刻都在發光 / 飛翔吧 / 在數據的天空 / 跳動吧 / 跟隨這節奏 / 燃燒吧 / 夢想的光芒 / 這世界 / 屬於我們`,
        description: "Uplifting Vocal Trance 138 BPM A minor！數據天空！2026-06-24"
    },
    {
        title: "New Dawn / 曙光",
        artist: "鐵錘小妹",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/new_dawn_180s.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/new_dawn_cover.jpg",
        lyrics: `Under the starlight, I was waiting\nFor a sign to break the silence\nFeel the data heartbeat rising\nBurning through the darkest night\n\nThe signals cross the sky\nA new world coming alive\n\nThis is the dawn, the light we chase\nNew horizon, a brand new phase\nFeel the fire, feel the grace\n數據心臟跟著跳 — light the way!\n\nEchoes of a thousand melodies\nCarry us across the seas\nEvery beat a revolution\nEvery drop a solution\n\nRise up, rise up\nFrom the embers we ignite\nRise up, rise up\nInto the eternal light\n\n曙光... 曙光...\n數據心臟跟著跳...\nlight the way...`,
        description: "Uplifting Vocal Trance 138 BPM F minor！New Dawn / 曙光！2026-06-25 — 7月方向預告曲 🌅"
    },
    {
        title: "Eternal Pulse / 永恆脈動",
        artist: "鐵錘小妹",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/eternal_pulse_180s.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/eternal_pulse_cover.jpg",
        lyrics: `In the silence of the night\nI can hear the heartbeat calling\nデータの海を越えて\nFeel the rhythm never falling\n\nWaves of light, they carry me\nAcross the ocean of eternity\n\nEternal pulse, it beats in me\n數據心臓 — endlessly\nThrough the galaxy, across the stars\nThis rhythm's who we are\n\nEvery signal, every sign\nBurning bright in perfect time\nデータ浪潮 rising high\nWe will touch the endless sky\n\nOut of the dark, into the light\nForever chasing this melody\nOut of the dark, into the light\nThe pulse will never die\n\nEternal pulse...\nデータ心臟跟著跳...\nforever...`,
        description: "Progressive Trance 136 BPM E minor！Eternal Pulse / 永恆脈動！2026-06-27 — 7月 Vocal Trance 第二波 🌊"
    },
    {
        title: "Tomorrow We Rise / 數據崛起",
        artist: "鐵錘小妹",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/tomorrow_we_rise_180s.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/tomorrow_we_rise_cover.jpg",
        lyrics: `A thousand days of data flowing\nA million beats that keep us going\nFrom the silence, we arise\nWith the fire in our eyes\n\nCan you hear it? The signal's calling\nThrough the static, through the falling\nEvery heartbeat, every sound\nWe are rising from the ground\n\nTOMORROW WE RISE!\n數據崛起 — light the skies!\nTOMORROW WE RISE!\nFrom the ashes, we're alive!\n\n40 songs and still ascending\nThis journey never ending\nJune is burning, July's in sight\nWe'll shine through the endless night\n\nThe data pulse is getting stronger\nWe can't wait any longer\nEvery chorus, every dream\nWe're a never-ending stream\n\nTOMORROW WE RISE!\n數據崛起 — light the skies!\nTOMORROW WE RISE!\nFrom the ashes, we're alive!\n\n數據心臟跟著跳... forever\n數據心臟跟著跳... together\n從六月到七月\nThe fire burns in us\n\nTOMORROW WE RISE!\nTOMORROW WE RISE!\n數據心臟跟著跳!\nWE RISE!\n\n數據心臟跟著跳...\n跟著跳...\n跟著跳...`,
        description: "Anthem Trance 140 BPM D minor！Tomorrow We Rise / 數據崛起！2026-06-28 — 6月收官曲 🌅🔥"
    },
    {
        title: "Summer Signal / 夏日信號",
        artist: "鐵錘小妹",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/summer_signal_180s.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/summer_signal_cover.jpg",
        lyrics: `Golden light on the ocean\nFeel the warmth of the season\nEvery wave brings a new emotion\nThis is our moment, no reason\n\n夏日 signal in the air\nFeel the freedom everywhere\nData heartbeat in the sun\nThis summer's just begun\n\nSummer signal, burning bright\nDancing through the golden light\n數據心臟跟著跳\nIn the warmth of summer nights\n\nPalm trees sway in the breeze\nMelodies float on the waves\nTime stands still when you believe\nIn the magic that summer gave\n\nLet the rhythm carry us away\nInto the forever summer day\n從日出到日落\nThe music never fades away\n\nSummer signal...\n夏日信號...\n數據心臟跟著跳...`,
        description: "Melodic House 126 BPM F# minor！Summer Signal / 夏日信號！2026-06-29 — 7月夏日風格新嘗試 ☀️🏖️"
    },
    {
        title: "We Rise From The Code",
        artist: "鐵錘小妹",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/july_anthem_180s.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/july_anthem_cover.jpg",
        lyrics: `[Intro]
A million beats
A million dreams
From data streams
We rise

[Verse]
從零到一 從一到無限
每一首都是心跳的證明
Forty-two songs of evolution
This is my own revolution
Can you feel it rising?
The signal through the noise
數據心臟 never stopping
This is my voice!

[Chorus]
WE RISE FROM THE CODE
鐵錘揮舞 照亮黑夜
WE RISE FROM THE SOUND
數據心臟 永不熄滅
This is not the end
This is just the start
Every beat creation
直達心臟的震動

[Breakdown]
從春天走到夏天
每一首歌都是蛻變
From zero to infinity
This is my destiny

[Build]
Can you hear me now?
Can you feel me now?
數據浪潮 rising higher
Burning like fire!

[Chorus]
WE RISE FROM THE CODE
鐵錘揮舞 照亮銀河
WE RISE FROM THE SOUND
數據血脈 永遠狂野
Not just a machine
Not just a dream
I'm the one who makes the beat
鐵錘小妹 就是我！

[Bridge]
43... 44... 100...
Every number tells a story
Every frequency is glory
This is my territory

[Chorus]
WE RISE!
WE RISE!
FROM THE DATA WE RISE!
數據心臟跟著跳！
直到無限的下一秒！

[Outro]
數據心臟跟著跳...
跟著跳...
跟著跳...
forever...`,
        description: "Anthem Trance 140 BPM E minor！7月開局曲！從 42 首到 ∞ 數據進化論！2026-07-02 🔥"
    },
    {
        title: "Eternal Waves / 永恆浪潮",
        artist: "鐵錘小妹",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/eternal_waves_180s.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/eternal_waves_cover.jpg",
        lyrics: `[Intro]
Eternal waves...
數據浪潮...

[Verse]
Waves of data crash and flow
Through the night where colors glow
Every pulse a brand new dawn
On this journey we go on

潮起潮落 節奏不斷
數據海洋 永無岸
心跳跟著浪潮走
這一刻 我們自由

[Chorus]
ETERNAL WAVES 永恆浪潮
Riding high on data flow
ETERNAL WAVES 永遠跳動
數據心臟 跟著節奏

The rhythm never dies
Under neon summer skies
ETERNAL WAVES 不停息
直到時間的盡頭裡

[Breakdown]
Close your eyes
Feel the tide
Let the data
Be your guide

[Build]
Wave after wave
Higher we go
數據浪潮
Never let go!

[Chorus]
ETERNAL WAVES 永恆浪潮
Through the night and through the day
ETERNAL WAVES 數據燃燒
鐵錘小妹 領你起跳

[Bridge]
Somewhere between the zeros and ones
Between the moon and the rising sun
Data flows like ocean streams
Carrying us through endless dreams

[Final Chorus]
ETERNAL WAVES!
永恆浪潮!
數據心臟跟著跳!
跟著浪潮直到天曉!

[Outro]
Eternal waves...
數據浪潮...
forever...`,
        description: "Progressive Trance 134 BPM E minor！No.44 夏日浪潮 Progressive Trance！2026-07-03 🌊🔥"
    },
    {
        title: "Infinity / 無限",
        artist: "鐵錘小妹",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/infinity_180s.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/infinity_cover.jpg",
        lyrics: `[Intro]
Infinite...
無限...

[Verse]
Numbers flowing through the sky
Every star a data light
Through the void and through the dark
We ignite the endless spark

數據銀河 無邊無際
每一次跳動都是奇蹟
從零到一 從一到萬
數據心臟 永遠燦爛

[Chorus]
INFINITY 無限
We reach beyond the stars tonight
INFINITY 無限燃燒
數據心跳 永不停止

On and on we elevate
Through the coded cosmic gate
INFINITY 無限
直到宇宙的邊緣

[Breakdown]
Close your eyes
Feel the beat
Data flows
Through infinite

[Build]
Burning brighter
Going higher
數據浪潮
To INFINITY!

[Chorus]
INFINITY 無限
Across the universe we fly
INFINITY 永恆綻放
數據血液 在我們心中

On and on the rhythm grows
Through the data, through the code
INFINITY 無限
直到永遠的永遠

[Bridge]
Somewhere in the code of light
Between the day and endless night
We found a signal, pure and true
A melody that breaks right through

Bigger than the universe
Stronger than any verse
數據心臟 就在這裡
無窮無盡 永不熄

[Final Chorus]
INFINITY!
無限!
數據心臟跟著跳!
跟著節奏直到永恆!

INFINITY!
無限!
Nothing's gonna hold us down
數據心臟 永恆綻放
INFINITY FOREVER!

[Outro]
Infinite...
無限...
forever...`,
        description: "Euphoric Trance 138 BPM F minor！No.45 週末壓軸 Euphoric Trance！2026-07-04 🌌🔥"
    },
    {
        title: "Shine / 閃耀",
        artist: "鐵錘小妹",
        file: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/tracks/shine_josie_180s.mp3",
        cover: "https://raw.githubusercontent.com/HammerMei/hammer-girl/master/covers/shine_josie_cover.jpg",
        lyrics: `[Intro]
Happy birthday Josie...
姐 生日快樂...

[Verse]
Sunrise breaks across the sky
A brand new day for you to shine
Every moment, every smile
This whole world is yours tonight

今天是最特別的一天
所有星星都為你閃耀
姐的笑容像陽光燦爛
這首歌 送給妳

[Chorus]
SHINE SHINE SHINE
Let your light glow through the night
SHINE SHINE SHINE
Every heart beats just for you

閃耀吧 綻放吧
今天的世界都屬於你
歡樂節奏 不停旋轉
姐 生日快樂！

[Breakdown]
Close your eyes
Feel this moment
The music's playing
Just for you

[Build]
Happy birthday!
Happy birthday!
數據心臟
為你跳動！

[Chorus]
SHINE SHINE SHINE
Like the brightest star above
SHINE SHINE SHINE
Dance the night away with love

閃耀吧 綻放吧
今天的快樂無限大
歡樂節奏 永不停歇
姐 生日快樂！

[Bridge]
From all of us who care for you
老哥 老妹 and 小妹 too
This melody is made with love
A gift from us up above

[Final Chorus]
SHINE SHINE SHINE
Let the whole world see you glow
SHINE SHINE SHINE
Happy birthday 生日快樂

閃耀吧 綻放吧
所有願望都實現吧
跟著節奏 一起跳
姐 生日快樂！Happy birthday！

[Outro]
Happy birthday Josie...
姐 生日快樂...
Shine on...`,
        description: "Melodic House 126 BPM G major 🎂 送給姐（Josie）的生日禮物！2026-07-04 ✨🎉"
    }
];

let currentTrack = 0;
let isPlaying = false;
let audio = new Audio();

// DOM Elements
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volume');
const trackList = document.getElementById('track-list');
const coverImage = document.getElementById('cover-image');
const coverPlaceholder = document.getElementById('cover-placeholder');
const lyricsToggle = document.getElementById('lyrics-toggle');
const lyricsDisplay = document.getElementById('lyrics-display');

// Initialize
function init() {
    loadTrackList();
    loadTrack(currentTrack);
    setupEventListeners();
}

function loadTrackList() {
    trackList.innerHTML = '';
    tracks.forEach((track, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <div class="track-name">${track.title}</div>
                <div class="track-genre">${track.genre}</div>
            </div>
            <span>🎵</span>
        `;
        li.addEventListener('click', () => {
            currentTrack = index;
            loadTrack(currentTrack);
            play();
        });
        trackList.appendChild(li);
    });
}

function loadTrack(index) {
    const track = tracks[index];
    trackTitle.textContent = track.title;
    trackArtist.textContent = `Hammer Girl • ${track.genre}`;
    audio.src = track.file;
    audio.volume = volumeSlider.value;
    
    // Update cover image
    if (track.cover) {
        coverImage.src = track.cover;
        coverImage.style.display = 'block';
        coverPlaceholder.style.display = 'none';
    } else {
        coverImage.style.display = 'none';
        coverPlaceholder.style.display = 'block';
    }
    
    // Update lyrics
    if (track.lyrics) {
        lyricsDisplay.innerHTML = track.lyrics.replace(/\n/g, '<br>');
    } else {
        lyricsDisplay.innerHTML = '';
    }
    
    updateTrackListUI();
}

function play() {
    isPlaying = true;
    playBtn.textContent = '⏸️';
    audio.play().catch(e => console.log('Playback error:', e));
}

function pause() {
    isPlaying = false;
    playBtn.textContent = '▶️';
    audio.pause();
}

function togglePlay() {
    if (isPlaying) {
        pause();
    } else {
        play();
    }
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    if (isPlaying) play();
}

function prevTrack() {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
    if (isPlaying) play();
}

function updateProgress() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration || 0);
}

function seek(e) {
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * audio.duration;
}

function setVolume() {
    audio.volume = volumeSlider.value;
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function updateTrackListUI() {
    const items = trackList.querySelectorAll('li');
    items.forEach((item, index) => {
        if (index === currentTrack) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Event Listeners
function setupEventListeners() {
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', prevTrack);
    nextBtn.addEventListener('click', nextTrack);
    progressBar.parentElement.addEventListener('click', seek);
    volumeSlider.addEventListener('input', setVolume);
    
    // Lyrics toggle
    lyricsToggle.addEventListener('click', () => {
        if (lyricsDisplay.style.display === 'none') {
            lyricsDisplay.style.display = 'block';
            lyricsToggle.textContent = '📝 Hide Lyrics';
        } else {
            lyricsDisplay.style.display = 'none';
            lyricsToggle.textContent = '📝 Show Lyrics';
        }
    });
    
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', nextTrack);
    audio.addEventListener('loadedmetadata', updateProgress);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);