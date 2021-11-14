const quiz = [
  {
    question: 'キングラーの鋏（はさみ）の特徴として正しいのは？',
    answers: [ '右が大きい', '左が大きい', '左右とも同じ大きさ', 'そもそもない'],
    correct: '左が大きい'
  },{
    question: 'ザングースのお腹のマークはアルファベットの◯に似てます。◯に入るものはなんでしょうか？',
    answers: [ 'W', 'Z', 'M', 'V'],
    correct: 'M'
  },{
    question: '初代ポケットモンスターでなぜかLv.51にもなって「にらみつける」を覚えるポケモンはどれ？',
    answers: [ 'ファイアー', 'フリーザー', 'サンダー', 'ミュウツー'],
    correct: 'ファイアー'
  },{
    question: 'たまごポケモン「タマタマ」は何体で一つのポケモンでしょうか？',
    answers: [ '4体', '5体', '6体', '7体'],
    correct: '6体'
  },{
    question:  'ラルトスの進化系で存在しないのは？',
    answers: [ 'キルリア♂', 'エルレイド♀', 'サーナイト♂', 'エルレイド♂'],
    correct: 'エルレイド♀'
  },{
    question: '一番鳴き声が長いポケモンは？',
    answers: [ 'ルージュラ', 'ナッシー', 'フーディン', 'ピカチュウ'],
    correct: 'ルージュラ'
  },{
    question: '一番鳴き声が短いポケモンは？',
    answers: [ 'デデンネ', 'ヤナップ', 'オタチ', 'ポッポ'],
    correct: 'ポッポ'
  },{
    question: 'アニメ「ポケットモンスター」で登場する、タケシのイシツブテの鳴き声として正しいのは？',
    answers: [ 'ラッシャイ！', 'ドッセイ！', 'オイショ！', 'オラァ！'],
    correct: 'ラッシャイ！'
  },{
    question: '別名に「アルキメンデス」という名前を持つポケモンは？',
    answers: [ 'キマワリ', 'ナゾノクサ', 'ダンゴロ', 'マッギョ'],
    correct: 'ナゾノクサ'
  },{
    question: 'ネイティオの二つの目が見ているもの何？',
    answers: [ '悪意と善意', '夢と現実', '死期と現在の年齢', '過去と未来'],
    correct: '過去と未来'
  },{
    question: 'パンチポケモン「エビワラー」はボクシングの重量別階級でいうとどの階級？',
    answers: [ 'フライ級', 'フェザー級', 'ライト級', 'ミドル級'],
    correct: 'フライ級'
  },{
    question: '雑巾の匂いがするポケモンは？',
    answers: [ 'ベトベター', 'ドガース', 'マリル', 'キリンリキ'],
    correct: 'マリル'
  },{
    question: '開発段階の仮の名前で「ハッパ」と名付けられていたポケモンは？',
    answers: [ 'リーフィア', 'コノハナ', 'チコリータ', 'フシギタネ'],
    correct: 'チコリータ'
  },{
    question: 'アニメポケットモンスターの主人公サトシの英語名はどれ？',
    answers: [ 'サトシ', 'アッシュ', 'レッド', 'キング'],
    correct: 'アッシュ'
  },{
    question: 'ピカチュウの英語名は？',
    answers: [ 'ボルトイーク', 'エレキマウス', 'イエローマウス', 'ピカチュウ'],
    correct: 'ピカチュウ'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数があればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert('終了！君の正解数は' + score + '/' + quizLength + 'だ！ 君はポケモンマスターになれたかな？');
  }
};


//ボタンを押したら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}