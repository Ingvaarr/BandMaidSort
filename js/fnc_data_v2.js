// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'img/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 20;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 3;
var ary_TitleData = [
  "MAID IN JAPAN",
  "New Beginning",
  "Brand New Maid",
  "Just Bring It",
  "World Domination",
  "CONQUEROR",
  "Unseen World",
  "BAND-MAIKO",
  "Singles(stuff not on albums)"  
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [1, "Be OK",                      [1,0,0], "BMA/MID.jpg"],
  [1, "EverGreen",                  [1,0,0], "BMA/MID.jpg"],
  [1, "KEY",                        [1,0,0], "BMA/MID.jpg"],
  [1, "Bye My Tears",               [1,0,0], "BMA/MID.jpg"],
  [1, "Knockin' on your heart",     [1,0,0], "BMA/MID.jpg"],
  [1, "Big Dad",                    [1,0,0], "BMA/MID.jpg"],
  [1, "夜明け前(Before Dawn)",       [1,0,0], "BMA/MID.jpg"],
  [1, "FORWARD",                    [1,0,0], "BMA/MID.jpg"],
  [1, "Love, Passion, Matador(reissue)",     [1,0,0], "BMA/MID.jpg"],
  [1, "Summer Drive(reissue)",      [1,0,0], "BMA/MID.jpg"],
  
  [1, "Thrill",                     [0,1,0], "BMA/NB.jpg"],
  [1, "FREEZER",                    [0,1,0], "BMA/NB.jpg"],
  [1, "REAL EXISTENCE",             [0,1,0], "BMA/NB.jpg"],
  [1, "Price of Pride",             [0,1,0], "BMA/NB.jpg"],
  [1, "Arcadia Girl",               [0,1,0], "BMA/NB.jpg"],
  [1, "Don't Apply the Brake",      [0,1,0], "BMA/NB.jpg"],
  [1, "Beauty and the Beast",       [0,1,0], "BMA/NB.jpg"],
  [1, "Don't Let Me Down",          [0,1,0], "BMA/NB.jpg"],
  [1, "Shake That",                 [0,1,0], "BMA/NB.jpg"],
    
  [1, "the non-fiction days",       [0,0,1], "BMA/BNM.jpg"],
  [1, "LOOK AT ME",                 [0,0,1], "BMA/BNM.jpg"],
  [1, "ORDER",                      [0,0,1], "BMA/BNM.jpg"],
  [1, "Brand-New Road",             [0,0,1], "BMA/BNM.jpg"],
  [1, "YURAGU",                     [0,0,1], "BMA/BNM.jpg"],
  [1, "FREEDOM",                    [0,0,1], "BMA/BNM.jpg"],
  [1, "Before Yesterday",           [0,0,1], "BMA/BNM.jpg"],
  [1, "alone",                      [0,0,1], "BMA/BNM.jpg"],
    
  [1, "Don't you tell ME",          [0,0,0,1], "BMA/JBI.jpg"],
  [1, "Puzzle",                     [0,0,0,1], "BMA/JBI.jpg"],
  [1, "Moratorium",                 [0,0,0,1], "BMA/JBI.jpg"],
  [1, "YOLO",                       [0,0,0,1], "BMA/JBI.jpg"],
  [1, "CROSS",                      [0,0,0,1], "BMA/JBI.jpg"],
  [1, "OOPARTS",                    [0,0,0,1], "BMA/JBI.jpg"],
  [1, "Take me higher!!",           [0,0,0,1], "BMA/JBI.jpg"],
  [1, "So, What?",                  [0,0,0,1], "BMA/JBI.jpg"],
  [1, "TIME",                       [0,0,0,1], "BMA/JBI.jpg"],
  [1, "you.",                       [0,0,0,1], "BMA/JBI.jpg"],
  [1, "Awkward",                    [0,0,0,1], "BMA/JBI.jpg"],
  [1, "decided by myself",          [0,0,0,1], "BMA/JBI.jpg"],
  [1, "secret My lips",             [0,0,0,1], "BMA/JBI.jpg"],
  
  [1, "I can't live without you.",  [0,0,0,0,1], "BMA/WD.jpg"],
  [1, "Play",                       [0,0,0,0,1], "BMA/WD.jpg"],
  [1, "One and only",               [0,0,0,0,1], "BMA/WD.jpg"],
  [1, "DOMINATION",                 [0,0,0,0,1], "BMA/WD.jpg"],
  [1, "FATE",                       [0,0,0,0,1], "BMA/WD.jpg"],
  [1, "Spirit!!",                   [0,0,0,0,1], "BMA/WD.jpg"],
  [1, "Rock in me",                 [0,0,0,0,1], "BMA/WD.jpg"],
  [1, "CLANG",                      [0,0,0,0,1], "BMA/WD.jpg"],
  [1, "Turn me on",                 [0,0,0,0,1], "BMA/WD.jpg"],
  [1, "Carry on living",            [0,0,0,0,1], "BMA/WD.jpg"],
  [1, "Daydreaming",                [0,0,0,0,1], "BMA/WD.jpg"],
  [1, "anemone",                    [0,0,0,0,1], "BMA/WD.jpg"],
  [1, "Alive-or-Dead",              [0,0,0,0,1], "BMA/WD.jpg"],
  [1, "DICE",                       [0,0,0,0,1], "BMA/WD.jpg"],
  [1, "ハニー(Honey)",                [0,0,0,0,1], "BMA/WD.jpg"],
   
  [1, "PAGE",                       [0,0,0,0,0,1], "BMA/CONQ.jpg"],
  [1, "glory",                      [0,0,0,0,0,1], "BMA/CONQ.jpg"],
  [1, "Liberal",                    [0,0,0,0,0,1], "BMA/CONQ.jpg"],
  [1, "endless Story",              [0,0,0,0,0,1], "BMA/CONQ.jpg"],
  [1, "Mirage",                     [0,0,0,0,0,1], "BMA/CONQ.jpg"],
  [1, "At the drop of a hat",       [0,0,0,0,0,1], "BMA/CONQ.jpg"],
  [1, "Wonderland",                 [0,0,0,0,0,1], "BMA/CONQ.jpg"],
  [1, "azure",                      [0,0,0,0,0,1], "BMA/CONQ.jpg"],
  [1, "Dilemma",                    [0,0,0,0,0,1], "BMA/CONQ.jpg"], 
  [1, "Bubble",                     [0,0,0,0,0,1], "BMA/CONQ.jpg"], 
  [1, "The Dragon Cries",           [0,0,0,0,0,1], "BMA/CONQ.jpg"], 
  [1, "flying high",                [0,0,0,0,0,1], "BMA/CONQ.jpg"], 
  [1, "Catharsis",                  [0,0,0,0,0,1], "BMA/CONQ.jpg"], 
  [1, "Blooming",                   [0,0,0,0,0,1], "BMA/CONQ.jpg"], 
  [1, "Reincarnation",              [0,0,0,0,0,1], "BMA/CONQ.jpg"], 
  
  [1, "Youth(UW Limited)",          [0,0,0,0,0,0,1], "BMA/UW.jpg"],
  [1, "No God",                     [0,0,0,0,0,0,1], "BMA/UW.jpg"],
  [1, "After Life",                 [0,0,0,0,0,0,1], "BMA/UW.jpg"],
  [1, "Manners",                    [0,0,0,0,0,0,1], "BMA/UW.jpg"],
  [1, "I Still Seek Revenge.",      [0,0,0,0,0,0,1], "BMA/UW.jpg"],
  [1, "H-G-K",                      [0,0,0,0,0,0,1], "BMA/UW.jpg"],
  [1, "Sayonakidori",               [0,0,0,0,0,0,1], "BMA/UW.jpg"],
  [1, "Why Why Why",                [0,0,0,0,0,0,1], "BMA/UW.jpg"],
  [1, "Chemical Reaction",          [0,0,0,0,0,0,1], "BMA/UW.jpg"],
  [1, "Giovanni",                   [0,0,0,0,0,0,1], "BMA/UW.jpg"],
  [1, "Honkai",                     [0,0,0,0,0,0,1], "BMA/UW.jpg"],
  [1, "Black Hole",                 [0,0,0,0,0,0,1], "BMA/UW.jpg"],
  [1, "Without Holding Back",       [0,0,0,0,0,0,1], "BMA/UW.jpg"],
  [1, "Warning!",                   [0,0,0,0,0,0,1], "BMA/UW.jpg"],
    
  [1, "secret MAIKO lips",          [0,0,0,0,0,0,0,1], "BMA/MAIKO.jpg"],
  [1, "TORA and TORA",              [0,0,0,0,0,0,0,1], "BMA/MAIKO.jpg"],
  [1, "YOLOSIOUSU",                 [0,0,0,0,0,0,0,1], "BMA/MAIKO.jpg"],
  [1, "ansan",                      [0,0,0,0,0,0,0,1], "BMA/MAIKO.jpg"],
  [1, "Akashimahen",                [0,0,0,0,0,0,0,1], "BMA/MAIKO.jpg"],
  [1, "Screaming(maiko)",           [0,0,0,0,0,0,0,1], "BMA/MAIKO.jpg"],
  [1, "GIONCHO",                    [0,0,0,0,0,0,0,1], "BMA/MAIKO.jpg"],
  
  [1, "Onset",                      [0,0,0,0,0,0,0,0,1], "BMA/SOTA.jpg"],
  [1, "Choose Me",                  [0,0,0,0,0,0,0,0,1], "BMA/CM.jpg"],
  [1, "hide-and-seek",              [0,0,0,0,0,0,0,0,1], "BMA/GLORY.jpg"],
  [1, "Smile",                      [0,0,0,0,0,0,0,0,1], "BMA/Smile.jpg"],
  [1, "Screaming",                  [0,0,0,0,0,0,0,0,1], "BMA/Screaming.jpg"],
  [1, "About Us",                   [0,0,0,0,0,0,0,0,1], "BMA/About.jpg"],
  [1, "Different",                  [0,0,0,0,0,0,0,0,1], "BMA/Different.jpg"],
  [1, "start over",                 [0,0,0,0,0,0,0,0,1], "BMA/Screaming.jpg"],
  [1, "Unfair game",                [0,0,0,0,0,0,0,0,1], "BMA/YOLO.jpg"],
  [1, "matchless GUM",              [0,0,0,0,0,0,0,0,1], "BMA/YOLO.jpg"],
  [1, "Don't be Long",              [0,0,0,0,0,0,0,0,1], "BMA/Different.jpg"],
  [1, "Sense",                      [0,0,0,0,0,0,0,0,1], "BMA/Sense.jpg"],
  [1, "Hibana",                     [0,0,0,0,0,0,0,0,1], "BMA/Sense.jpg"],
  [1, "Corallium",                  [0,0,0,0,0,0,0,0,1], "BMA/Sense.jpg"],
 ];
