const lessonData = [
  { id: "trang", label: "Tràng", keyword: "nhân vật", clue: "Người đàn ông nghèo, làm nghề đẩy xe bò thuê và bất ngờ có vợ giữa nạn đói.", extraHint: "Người này sống cùng mẹ già trong một xóm nghèo." },
  { id: "trang-nghe-xe-bo", label: "Tràng · xe bò", keyword: "nhân vật", clue: "Chi tiết gợi về công việc của người đàn ông đưa người vợ nhặt về nhà.", extraHint: "Anh thường làm công việc chở xe bò thuê." },
  { id: "trang-dan-vo-ve", label: "Tràng dẫn vợ về", keyword: "hành động", clue: "Hành động khiến cả xóm ngụ cư ngạc nhiên trong buổi chiều đói khát.", extraHint: "Người thực hiện hành động này là nhân vật nam nghèo trong truyện." },
  { id: "thi", label: "Thị", keyword: "nhân vật", clue: "Người phụ nữ theo một câu nói đùa về làm vợ, rồi cùng Tràng về nhà.", extraHint: "Cô xuất hiện trong cuộc gặp tình cờ ở ngoài chợ." },
  { id: "thi-theo-trang", label: "Thị theo Tràng", keyword: "hành động", clue: "Sự lựa chọn của người phụ nữ khi nghe lời rủ về làm vợ giữa nạn đói.", extraHint: "Cô trở thành người đi cùng Tràng về xóm ngụ cư." },
  { id: "thi-lam-dau", label: "Nàng dâu mới", keyword: "vai trò", clue: "Vị trí của Thị sau khi bước vào căn nhà của Tràng và bà cụ Tứ.", extraHint: "Đây là người phụ nữ mới xuất hiện trong gia đình." },
  { id: "ba-cu-tu", label: "Bà cụ Tứ", keyword: "nhân vật", clue: "Người mẹ già đón nhận nàng dâu mới bằng sự xót thương và niềm hi vọng.", extraHint: "Bà là mẹ của người đàn ông đưa vợ về nhà." },
  { id: "ba-cu-tu-don-dau", label: "Bà cụ Tứ đón dâu", keyword: "hành động", clue: "Cách người mẹ già đối diện với chuyện con trai có vợ trong cảnh đói nghèo.", extraHint: "Bà vừa tủi thân vừa cố gắng nói chuyện tương lai." },
  { id: "ba-cu-tu-hy-vong", label: "Niềm hi vọng của bà cụ Tứ", keyword: "tâm trạng", clue: "Điều bà cụ Tứ cố gieo vào bữa cơm và cuộc sống của các con.", extraHint: "Bà hướng các con về một ngày mai tốt hơn." },
  { id: "nan-doi", label: "Nạn đói", keyword: "bối cảnh", clue: "Hoàn cảnh khắc nghiệt phủ bóng lên xóm ngụ cư và cuộc gặp gỡ của hai con người.", extraHint: "Người chết đói và tiếng quạ tạo nên không khí ám ảnh." },
  { id: "nan-doi-am-anh", label: "Không khí nạn đói", keyword: "bối cảnh", clue: "Bầu không khí ảm đạm, đói khát bao trùm các nhân vật trong truyện.", extraHint: "Hãy nhớ đến những âm thanh và hình ảnh chết chóc đầu truyện." },
  { id: "doi-khat", label: "Đói khát", keyword: "hoàn cảnh", clue: "Hoàn cảnh khiến một lời nói đùa về hôn nhân trở thành chuyện thật.", extraHint: "Đây là tình trạng thiếu ăn của con người trong truyện." },
  { id: "nhat-vo", label: "Nhặt vợ", keyword: "chi tiết", clue: "Một sự kiện lạ lùng: giữa lúc đói khát, một người đàn ông lại có được gia đình.", extraHint: "Chuyện bắt đầu từ vài câu nói nửa đùa nửa thật." },
  { id: "nhat-vo-bat-ngo", label: "Cuộc hôn nhân bất ngờ", keyword: "chi tiết", clue: "Một cuộc hôn nhân diễn ra nhanh chóng và khác thường giữa nạn đói.", extraHint: "Người chồng không chuẩn bị cưới hỏi như thường lệ." },
  { id: "cau-noi-hai-lam-vo", label: "Câu nói làm vợ", keyword: "chi tiết", clue: "Lời nói ban đầu tưởng như đùa vui nhưng lại dẫn đến việc Thị theo Tràng.", extraHint: "Lời nói này gắn với cuộc gặp ngoài chợ." },
  { id: "xom-ngu-cu", label: "Xóm ngụ cư", keyword: "không gian", clue: "Nơi những người nghèo sống chen chúc; dân xóm ngạc nhiên khi thấy Tràng dẫn người về.", extraHint: "Đây là nơi Tràng và mẹ đang sinh sống." },
  { id: "dan-xom-ngac-nhien", label: "Dân xóm ngạc nhiên", keyword: "chi tiết", clue: "Phản ứng của những người sống quanh nhà Tràng khi thấy anh đưa một người phụ nữ về.", extraHint: "Họ nhìn theo và bàn tán vì chuyện này quá bất thường." },
  { id: "can-nha-trang", label: "Căn nhà của Tràng", keyword: "không gian", clue: "Không gian nhỏ bé đón nhận nàng dâu mới và bắt đầu có hơi ấm gia đình.", extraHint: "Đây là nơi có mẹ già và người con trai nghèo." },
  { id: "bua-chao", label: "Nồi cháo cám", keyword: "chi tiết", clue: "Món ăn đắng chát trong bữa cơm ngày đói nhưng được gọi bằng một cái tên vui để giữ niềm tin.", extraHint: "Bữa ăn có món cháo khiến mọi người cố vui vẻ đón nhận." },
  { id: "bua-com-ngay-doi", label: "Bữa cơm ngày đói", keyword: "chi tiết", clue: "Bữa ăn đạm bạc nhưng đánh dấu sự hiện diện của một gia đình mới.", extraHint: "Mọi người cố tạo không khí vui vẻ dù thức ăn rất thiếu thốn." },
  { id: "mieng-an-dang-chat", label: "Vị đắng chát", keyword: "cảm giác", clue: "Cảm giác gắn với món ăn trong bữa cơm đầu tiên của gia đình sau khi có nàng dâu.", extraHint: "Hãy nhớ đến món ăn làm người đọc cảm nhận rõ cái đói." },
  { id: "la-co-do", label: "Lá cờ đỏ", keyword: "hình ảnh", clue: "Hình ảnh xuất hiện ở cuối truyện, gợi một hướng đi mới và sự đổi thay phía trước.", extraHint: "Hình ảnh này xuất hiện trong suy nghĩ của Tràng ở cuối truyện." },
  { id: "cuoi-truyen", label: "Cuối truyện", keyword: "kết thúc", clue: "Phần kết mở ra một hình ảnh mới bên cạnh suy nghĩ của Tràng về tương lai.", extraHint: "Hãy tìm ô gắn với hình ảnh lá cờ ở phần cuối." },
  { id: "huong-di-moi", label: "Hướng đi mới", keyword: "ý nghĩa", clue: "Điều được gợi ra từ hình ảnh cuối truyện, đối lập với không khí đói khát ban đầu.", extraHint: "Nó gắn với sự đổi thay và niềm tin phía trước." },
  { id: "tinh-nguoi", label: "Tình người", keyword: "giá trị", clue: "Điều vẫn nảy nở trong đói khát: sự cưu mang, mái ấm và niềm hi vọng sống.", extraHint: "Nó giúp các nhân vật hướng về một mái ấm dù đang đói khát." },
  { id: "mai-am", label: "Mái ấm gia đình", keyword: "giá trị", clue: "Điều Tràng, Thị và bà cụ Tứ cùng tạo dựng trong hoàn cảnh vô cùng thiếu thốn.", extraHint: "Nó được hình thành khi những con người xa lạ biết nương tựa nhau." },
  { id: "niem-tin-song", label: "Niềm tin sống", keyword: "giá trị", clue: "Sức mạnh giúp các nhân vật vẫn nghĩ đến ngày mai dù hiện tại đầy đói khát.", extraHint: "Hãy liên hệ với cách bà cụ Tứ nói về tương lai." },
  { id: "boi-canh-lich-su", label: "Bối cảnh lịch sử 1945", keyword: "bối cảnh lịch sử", clue: "Câu hỏi bản chất: Câu chuyện diễn ra trong biến cố lịch sử nào khiến người dân rơi vào cảnh đói khát, chết chóc?", extraHint: "Hãy liên hệ với nạn đói khủng khiếp diễn ra trước Cách mạng tháng Tám." },
  { id: "hoan-canh-sang-tac", label: "Hoàn cảnh sáng tác", keyword: "tác phẩm", clue: "Câu hỏi bản chất: Tác phẩm được viết từ sự day dứt của Kim Lân về người dân nghèo trong nạn đói và ánh sáng của Cách mạng.", extraHint: "Đáp án là hoàn cảnh hình thành tác phẩm, không phải một nhân vật." },
  { id: "tinh-huong-truyen", label: "Tình huống nhặt vợ", keyword: "tình huống truyện", clue: "Câu hỏi bản chất: Tình huống nào vừa éo le, bất ngờ vừa làm bộc lộ tình người và khát vọng sống của các nhân vật?", extraHint: "Hãy tìm sự kiện Tràng có vợ giữa lúc mọi người đang đói." },
  { id: "truyen-ngan-hien-dai", label: "Truyện ngắn hiện đại", keyword: "thể loại", clue: "Câu hỏi bản chất: Tác phẩm tập trung vào một tình huống đời thường, ít nhân vật, thời gian ngắn nhưng gợi ra vấn đề xã hội lớn. Đó là đặc điểm của gì?", extraHint: "Đáp án gọi tên kiểu tác phẩm mà Vợ nhặt thuộc về." },
  { id: "yeu-to-truyen-ngan", label: "Yếu tố truyện ngắn", keyword: "đặc trưng thể loại", clue: "Câu hỏi bản chất: Chi tiết nào được chọn lọc để xoay quanh một biến cố, tạo sức nén và làm thay đổi đời sống nhân vật?", extraHint: "Hãy nghĩ đến cách truyện tổ chức quanh việc Tràng đưa vợ về." },
  { id: "ngoi-ke", label: "Ngôi kể thứ ba", keyword: "nghệ thuật kể chuyện", clue: "Câu hỏi bản chất: Người kể chuyện giấu mình, gọi nhân vật bằng tên và có thể theo dõi nhiều nhân vật. Đây là ngôi kể nào?", extraHint: "Người kể không xưng 'tôi' trong câu chuyện." },
  { id: "gia-tri-hien-thuc", label: "Giá trị hiện thực", keyword: "giá trị tác phẩm", clue: "Câu hỏi bản chất: Tác phẩm phản ánh chân thực cuộc sống thê thảm của người dân nghèo trong nạn đói qua những hình ảnh nào?", extraHint: "Hãy liên hệ với cái đói, người chết đói và xóm ngụ cư." },
  { id: "gia-tri-nhan-dao", label: "Giá trị nhân đạo", keyword: "giá trị tác phẩm", clue: "Câu hỏi bản chất: Tác phẩm thể hiện sự yêu thương, trân trọng con người và niềm tin vào khả năng hướng tới hạnh phúc của họ. Đó là gì?", extraHint: "Đáp án là giá trị thể hiện cái nhìn bênh vực và nâng niu con người." },
  { id: "nghe-thuat-dac-sac", label: "Nghệ thuật đặc sắc", keyword: "nghệ thuật", clue: "Câu hỏi bản chất: Những yếu tố như tình huống độc đáo, ngôn ngữ đời thường và miêu tả tâm lí làm nên sức hấp dẫn nào của truyện?", extraHint: "Hãy chọn ô gọi tên phương diện làm nên sức hấp dẫn của tác phẩm." }
];

const coreQuestionData = [
  { id: "core-lich-su", label: "Bối cảnh lịch sử 1945", keyword: "bối cảnh lịch sử", clue: "Vì sao nạn đói trong truyện không chỉ là hoàn cảnh riêng của nhân vật mà còn phản ánh một biến cố lớn của dân tộc?", extraHint: "Hãy liên hệ nạn đói khủng khiếp trước Cách mạng tháng Tám." },
  { id: "core-lich-su-xa-hoi", label: "Nạn đói và xã hội", keyword: "bối cảnh lịch sử", clue: "Bối cảnh lịch sử đã đẩy con người vào nghịch cảnh nào, khiến một chuyện hôn nhân vốn cần cưới hỏi lại diễn ra vội vã?", extraHint: "Nghĩ đến cái đói và sự sống còn của người dân nghèo." },
  { id: "core-lich-su-y-nghia", label: "Lịch sử và ý nghĩa", keyword: "bối cảnh lịch sử", clue: "Việc đặt câu chuyện gia đình bên cạnh nạn đói giúp tác phẩm nhìn sâu hơn vào điều gì của xã hội và con người?", extraHint: "Câu hỏi hướng đến mối quan hệ giữa hoàn cảnh lịch sử và số phận con người." },
  { id: "core-sang-tac", label: "Hoàn cảnh sáng tác", keyword: "hoàn cảnh sáng tác", clue: "Hoàn cảnh sáng tác nào giúp giải thích vì sao Kim Lân vừa tái hiện cái đói vừa phát hiện ánh sáng của tình người?", extraHint: "Hãy nhớ mối quan tâm của nhà văn đối với người dân nghèo và sự đổi thay của đất nước." },
  { id: "core-sang-tac-nhan-dao", label: "Cảm hứng nhân đạo", keyword: "hoàn cảnh sáng tác", clue: "Từ hoàn cảnh sáng tác, vì sao câu chuyện không dừng ở việc kể khổ mà còn khẳng định khát vọng sống của người nghèo?", extraHint: "Đáp án gắn với cách nhà văn nhìn con người bằng sự yêu thương và trân trọng." },
  { id: "core-sang-tac-hien-thuc", label: "Hiện thực và hi vọng", keyword: "hoàn cảnh sáng tác", clue: "Sự kết hợp giữa hiện thực khắc nghiệt và niềm hi vọng trong truyện cho thấy cách nhìn nào của tác giả về cuộc sống?", extraHint: "Hãy tìm sự cân bằng giữa cái đói trước mắt và tương lai được gợi mở." },
  { id: "core-truyen-ngan", label: "Bản chất truyện ngắn", keyword: "truyện ngắn hiện đại", clue: "Vì sao một biến cố nhỏ trong một gia đình nghèo lại có thể gợi ra vấn đề lớn về xã hội và con người?", extraHint: "Hãy nghĩ đến sức nén của tình huống và cách truyện ngắn tạo ý nghĩa từ một lát cắt đời sống." },
  { id: "core-yeu-to-truyen", label: "Yếu tố truyện ngắn", keyword: "yếu tố truyện ngắn", clue: "Yếu tố nào tập trung các nhân vật, hành động và diễn biến quanh sự kiện Tràng có vợ để tạo sức nén cho toàn truyện?", extraHint: "Đáp án là hạt nhân tổ chức toàn bộ diễn biến câu chuyện." },
  { id: "core-nghe-thuat", label: "Nghệ thuật kể chuyện", keyword: "truyện ngắn hiện đại", clue: "Tình huống độc đáo, ngôn ngữ đời thường và miêu tả tâm lí cùng làm nổi bật bản chất nào của truyện ngắn hiện đại?", extraHint: "Hãy chọn ô gọi tên phương diện nghệ thuật bao quát các thủ pháp ấy." }
];

const modeClues = {
  keywords: data => data.clue,
  concepts: data => `Khái niệm này gợi đến ${data.keyword} trong câu chuyện: ${data.clue.charAt(0).toLowerCase()}${data.clue.slice(1)}`,
  matching: data => `Ghép mảnh này với mạch truyện: ${data.clue}`
};

const state = {
  started: false, finished: false, mode: "keywords", board: [], current: null,
  correct: new Set(), attempts: 0, firstTry: 0, streak: 0, bestStreak: 0,
  mistakes: new Set(), questionIndex: 0, startTime: null, elapsed: 0, bingoCount: 0, bingoLines: [], bonusDone: false, timerId: null
};

const $ = selector => document.querySelector(selector);
const boardEl = $("#bingoBoard");
const clueText = $("#clueText");
const feedback = $("#feedback");

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const remainder = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function renderBoard() {
  boardEl.innerHTML = "";
  state.board.forEach((item, index) => {
    const cell = document.createElement("button");
    cell.className = "bingo-cell";
    cell.type = "button";
    cell.dataset.id = item.id;
    cell.dataset.index = index;
    cell.setAttribute("role", "gridcell");
    cell.textContent = item.label;
    cell.addEventListener("click", () => chooseCell(item.id, cell));
    if (state.correct.has(item.id)) {
      cell.classList.add("selected");
      cell.disabled = true;
    }
    boardEl.appendChild(cell);
  });
}

function updateStats() {
  $("#correctCount").textContent = state.correct.size;
  $("#attemptCount").textContent = state.attempts;
  $("#firstTryCount").textContent = state.firstTry;
  $("#timer").textContent = formatTime(state.elapsed);
  $("#statusText").textContent = state.finished ? "Đã Bingo" : state.started ? "Đang chơi" : "Chưa chơi";
  $("#resultButton").disabled = !state.finished;
  $("#questionNumber").textContent = `${Math.min(state.questionIndex + (state.current ? 1 : 0), state.board.length)} / ${state.board.length || 9}`;
}

function startTimer() {
  clearInterval(state.timerId);
  state.startTime = Date.now();
  state.timerId = setInterval(() => {
    if (!state.finished && state.started) {
      state.elapsed = Math.floor((Date.now() - state.startTime) / 1000);
      updateStats();
    }
  }, 1000);
}

function beginGame() {
  state.started = true;
  state.finished = false;
  state.board = shuffle(lessonData).slice(0, 9);
  state.current = null;
  state.correct.clear();
  state.attempts = 0;
  state.firstTry = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.mistakes.clear();
  state.questionIndex = 0;
  state.elapsed = 0;
  state.bingoCount = 0;
  state.bingoLines = [];
  state.bonusDone = false;
  $("#startButton").innerHTML = "↻ Chơi lại";
  $("#hintButton").disabled = false;
  $("#nextButton").disabled = true;
  $("#roundLabel").textContent = "ĐANG CHƠI";
  $("#boardHint").textContent = "Một ô chỉ được tính đúng một lần";
  feedback.textContent = "";
  feedback.className = "feedback";
  renderBoard();
  startTimer();
  nextQuestion();
}

function nextQuestion() {
  if (!state.started || state.finished) return;
  if (state.correct.size === state.board.length) {
    finishGame();
    return;
  }
  const remaining = state.board.filter(item => !state.correct.has(item.id));
  state.current = remaining[0];
  state.questionIndex = state.correct.size;
  clueText.textContent = modeClues[state.mode](state.current);
  feedback.textContent = "";
  feedback.className = "feedback";
  $("#nextButton").disabled = true;
  $("#hintButton").disabled = false;
  updateStats();
}

function chooseCell(id, cell) {
  if (!state.started || state.finished || !state.current || state.correct.has(id)) return;
  state.attempts += 1;
  if (id !== state.current.id) {
    state.mistakes.add(state.current.id);
    state.streak = 0;
    cell.classList.remove("wrong");
    void cell.offsetWidth;
    cell.classList.add("wrong");
    feedback.textContent = "Chưa đúng ô này. Hãy đọc lại gợi ý và thử một ô khác nhé.";
    feedback.className = "feedback";
    updateStats();
    return;
  }
  const hadMistake = state.mistakes.has(id);
  state.correct.add(id);
  if (!hadMistake) state.firstTry += 1;
  state.streak += 1;
  state.bestStreak = Math.max(state.bestStreak, state.streak);
  cell.classList.add("selected");
  cell.disabled = true;
  feedback.textContent = hadMistake ? "Đúng rồi! Ô đã được ghi nhận." : "Chính xác! Em tìm được ô đúng ngay lần đầu.";
  feedback.className = "feedback success";
  $("#nextButton").disabled = false;
  $("#hintButton").disabled = true;
  updateStats();
  const newLines = getBingoLines();
  if (newLines.length > state.bingoLines.length) {
    state.bingoLines = newLines;
    state.bingoCount = newLines.length;
    $("#statusText").textContent = "BINGO!";
    setTimeout(() => openBonus(newLines[newLines.length - 1]), 450);
  }
  if (state.correct.size === state.board.length) finishGame();
}

function getBingoLines() {
  const lines = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
  return lines.filter(line => line.every(index => state.correct.has(state.board[index].id)));
}

function showHint() {
  if (!state.current || !state.started || state.finished) return;
  feedback.textContent = `Gợi ý thêm: ${state.current.extraHint}`;
  feedback.className = "feedback";
  state.attempts += 1;
  updateStats();
}

function openBonus(line) {
  const items = line.map(index => state.board[index]);
  const ids = new Set(items.map(item => item.id));
  const hasRelationship = [
    ["trang", "thi", "nhat-vo"],
    ["ba-cu-tu", "nhat-vo", "tinh-nguoi"],
    ["nan-doi", "bua-chao", "la-co-do"]
  ].some(group => group.every(id => ids.has(id)));
  $("#bonusItems").innerHTML = items.map(item => `<div class="bonus-item">${item.label}</div>`).join("");
  $("#bonusTitle").textContent = hasRelationship ? "BINGO BONUS" : "BINGO BONUS · GHÉP Ý";
  $(".modal-lead").textContent = hasRelationship
    ? "Ba ô này cùng mở ra một mạch ý về tình người trong hoàn cảnh khắc nghiệt."
    : "Ba ô này đều góp một mảnh vào câu chuyện. Hãy ghép chúng thành một nhận xét ngắn dựa trên văn bản.";
  $(".answer-label").textContent = hasRelationship ? "Giải thích ngắn mối liên hệ" : "Trả lời câu hỏi tổng hợp";
  $("#bonusAnswer").value = "";
  $("#bonusFeedback").textContent = "";
  $("#bonusModal").hidden = false;
  $("#bonusAnswer").focus();
}

function finishGame() {
  if (state.finished) return;
  state.finished = true;
  clearInterval(state.timerId);
  state.current = null;
  $("#hintButton").disabled = true;
  $("#nextButton").disabled = true;
  $("#roundLabel").textContent = "HOÀN THÀNH";
  $("#clueText").textContent = "Em đã mở đủ các mảnh ghép của văn bản.";
  updateStats();
}

function openResults() {
  const name = $("#studentName").value.trim() || "Em";
  $("#resultGreeting").textContent = `${name} đã hoàn thành hành trình ôn tập Vợ nhặt.`;
  const stats = [
    [state.correct.size, "ô đúng"], [state.bingoCount, "lần Bingo"], [state.firstTry, "câu đúng ngay lần đầu"],
    [formatTime(state.elapsed), "thời gian hoàn thành"], [state.bestStreak, "chuỗi đúng dài nhất"], [state.attempts, "lần thử"]
  ];
  $("#resultStats").innerHTML = stats.map(([value, label]) => `<div class="result-stat"><strong>${value}</strong><span>${label}</span></div>`).join("");
  const reviewItems = lessonData.filter(item => state.mistakes.has(item.id)).map(item => item.label);
  $("#reviewText").textContent = reviewItems.length ? reviewItems.join(" · ") : "Em chưa có ô nào cần xem lại. Rất chắc tay!";
  $("#resultModal").hidden = false;
}

function closeModals() { document.querySelectorAll(".modal-backdrop").forEach(modal => { modal.hidden = true; }); }

$("#startButton").addEventListener("click", beginGame);
$("#hintButton").addEventListener("click", showHint);
$("#nextButton").addEventListener("click", nextQuestion);
$("#resultButton").addEventListener("click", openResults);
$("#playAgainButton").addEventListener("click", () => { closeModals(); beginGame(); });
$("#submitBonus").addEventListener("click", () => {
  const answer = $("#bonusAnswer").value.trim();
  if (!answer) { $("#bonusFeedback").textContent = "Hãy viết một câu giải thích ngắn trước khi hoàn thành nhé."; return; }
  state.bonusDone = true;
  $("#bonusFeedback").textContent = "Đã lưu phần giải thích. Mối liên hệ em nhận ra là điều quan trọng nhất!";
  setTimeout(closeModals, 900);
});
document.querySelectorAll("[data-close-modal]").forEach(button => button.addEventListener("click", closeModals));
document.querySelectorAll(".mode-button:not(.disabled)").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".mode-button").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  state.mode = button.dataset.mode;
  if (state.current && state.started && !state.finished) clueText.textContent = modeClues[state.mode](state.current);
}));

document.addEventListener("keydown", event => { if (event.key === "Escape") closeModals(); });

renderBoard();
updateStats();