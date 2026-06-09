const exampleMemory = `오늘 정희와 대천 바닷가에 다녀왔다. 대천은 가장 가까운 바다라 여러 번 갔고 질릴 법도 한데, 이상하게 갈 때마다 늘 새롭고 즐겁다. 정희가 운전해서 갔고 나는 어제 밤을 새운 탓에 가는 내내 조수석에서 잠들어 있었다. 도착하자마자 바다를 봤을 때 그동안 마음속에 쌓여 있던 답답한 것들이 한꺼번에 풀리는 기분이 들었다. 그렇게 바다를 바라보다가 갑자기 정희가 짚라인을 타자고 해서 탔다. 처음 타봤는데 너무 재밌어서 두 번이나 탔다. 저녁에는 조개구이를 먹었다. 정희가 운전해야 해서 술은 마시지 못했지만 다음을 기약하기로 했다. 정말 오랜만에 제대로 쉬었다는 느낌이 들었다. 쉬는 게 꼭 집에서 누워 있는 것만은 아니라는 생각을 했다.`;

const archiveRecord = {
  id: "RE-20220306",
  title: "대천 바다에 간 날",
  scenes: [
    {
      id: "RE-20220306-S01",
      title: "조수석에서 잠든 길",
      type: "이동 장면",
      emotions: "피곤함, 편안함, 미안함",
      description:
        "정희가 운전하는 차를 타고 대천으로 향하는 길. 밤을 새운 화자는 조수석에서 잠들어 있다.",
      image: "assets/scene01.png",
    },
    {
      id: "RE-20220306-S02",
      title: "바다를 본 순간",
      type: "공간 장면",
      emotions: "해방감, 안도감, 시원함",
      description:
        "도착하자마자 바다를 보는 순간. 답답했던 마음이 한 번에 풀리는 감정적 전환점.",
      image: "assets/scene02.png",
    },
    {
      id: "RE-20220306-S03",
      title: "갑자기 시작된 짚라인",
      type: "활동 장면",
      emotions: "설렘, 짜릿함, 즐거움",
      description:
        "정희의 제안으로 갑자기 짚라인을 타게 된 장면. 처음이지만 너무 재밌어서 두 번이나 타게 된다.",
      image: "assets/scene03.png",
    },
    {
      id: "RE-20220306-S04",
      title: "조개구이 먹은 저녁",
      type: "식사 장면",
      emotions: "만족감, 아쉬움, 편안함",
      description:
        "하루를 마무리하며 조개구이를 먹는 장면. 술은 못 마셨지만 다음을 기약하는 마음이 남는다.",
      image: "assets/scene04.png",
    },
    {
      id: "RE-20220306-S05",
      title: "하루가 끝나던 바다",
      type: "회고 장면",
      emotions: "충만함, 회복, 다짐",
      description:
        "하루를 돌아보며, 쉬는 게 꼭 집에만 있는 것은 아니라는 생각을 하게 되는 마무리 장면.",
      image: "assets/scene05.png",
    },
  ],
};

const exploreRecords = [
  {
    id: "RE-20180302",
    title: "중학교 입학식 날",
    emotions: ["낯섦", "긴장", "설렘"],
    description: "처음 입은 교복과 낯선 교실, 어색하게 앉아 있던 첫날의 기억.",
  },
  {
    id: "RE-20201115",
    title: "고등학교 야자 끝나고 먹은 컵라면",
    emotions: ["피곤함", "우정", "따뜻함"],
    description: "늦은 밤 친구들과 편의점 앞에서 먹던 컵라면의 기억.",
  },
  {
    id: "RE-20160505",
    title: "우리 딸 지우가 처음 동물원에 간 날",
    emotions: ["기쁨", "신기함", "애틋함"],
    description: "작은 손으로 유리창을 짚고 동물을 바라보던 아이의 첫 동물원 기억.",
  },
  {
    id: "RE-20191224",
    title: "가족이랑 처음 케이크 만든 크리스마스",
    emotions: ["따뜻함", "소란스러움", "행복"],
    description: "모양은 삐뚤었지만 오래 기억에 남은 가족의 겨울밤.",
  },
  {
    id: "RE-20220718",
    title: "할머니 집 마당에서 수박 먹던 오후",
    emotions: ["여름", "그리움", "평온"],
    description: "선풍기 바람과 마당 냄새, 손에 묻은 수박물이 남아 있는 기억.",
  },
  {
    id: "RE-20230603",
    title: "친구들과 마지막으로 교복 입고 찍은 사진",
    emotions: ["아쉬움", "장난스러움", "청춘"],
    description: "졸업 전, 아무렇지 않게 웃었지만 나중에는 오래 남은 하루.",
  },
];

const state = {
  currentPage: "home",
  archiveCreated: false,
  isProcessing: false,
  currentSceneIndex: 0,
  activeAlbumTab: "scenes",
  loadingTimers: [],
};

const pageScreens = new Map(
  Array.from(document.querySelectorAll("[data-page-screen]")).map((screen) => [
    screen.dataset.pageScreen,
    screen,
  ])
);

const navTargets = Array.from(document.querySelectorAll("[data-page-target]"));
const pageButtons = Array.from(document.querySelectorAll("[data-page-target]"));
const memoryInput = document.getElementById("memoryInput");
const inputHelper = document.getElementById("inputHelper");
const fillExampleButton = document.getElementById("fillExample");
const restoreButton = document.getElementById("restoreButton");
const loadingSteps = Array.from(document.querySelectorAll("[data-loading-step]"));
const loadingBarFill = document.getElementById("loadingBarFill");
const archiveShelfStatus = document.getElementById("archiveShelfStatus");
const archiveEmpty = document.getElementById("archiveEmpty");
const albumCard = document.getElementById("albumCard");
const openAlbumButton = document.getElementById("openAlbumButton");
const emptyArchiveAction = document.getElementById("emptyArchiveAction");
const albumModal = document.getElementById("albumModal");
const closeAlbumModal = document.getElementById("closeAlbumModal");
const albumTabButtons = Array.from(document.querySelectorAll("[data-album-tab]"));
const albumTabPanels = Array.from(document.querySelectorAll("[data-tab-panel]"));
const prevSceneButton = document.getElementById("prevSceneButton");
const nextSceneButton = document.getElementById("nextSceneButton");
const sceneCounter = document.getElementById("sceneCounter");
const sceneDetailId = document.getElementById("sceneDetailId");
const sceneDetailTitle = document.getElementById("sceneDetailTitle");
const sceneDetailType = document.getElementById("sceneDetailType");
const sceneDetailEmotions = document.getElementById("sceneDetailEmotions");
const sceneDetailDescription = document.getElementById("sceneDetailDescription");
const sceneDetailImage = document.getElementById("sceneDetailImage");
const sceneDetailMedia = document.getElementById("sceneDetailMedia");
const sceneFallbackId = document.getElementById("sceneFallbackId");
const sceneFallbackTitle = document.getElementById("sceneFallbackTitle");
const memoryFilm = document.getElementById("memoryFilm");
const filmPlayer = document.getElementById("filmPlayer");
const previewModal = document.getElementById("previewModal");
const closePreviewModal = document.getElementById("closePreviewModal");
const previewId = document.getElementById("previewId");
const previewTitle = document.getElementById("previewTitle");
const previewEmotionRow = document.getElementById("previewEmotionRow");
const previewDescription = document.getElementById("previewDescription");
const previewCards = Array.from(document.querySelectorAll("[data-preview-index]"));

// 화면 전환과 생성 상태를 한 곳에서 관리합니다.
function showPage(pageId, options = {}) {
  const { force = false } = options;

  if (!pageScreens.has(pageId)) {
    return;
  }

  if (state.isProcessing && pageId !== "loading" && !force) {
    return;
  }

  pageScreens.forEach((screen, id) => {
    const isActive = id === pageId;
    screen.hidden = !isActive;
    screen.classList.toggle("is-active", isActive);
  });

  state.currentPage = pageId;
  const activeNavPage = pageId === "loading" ? "restore" : pageId;

  navTargets.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.pageTarget === activeNavPage);
  });
}

function clearLoadingTimers() {
  state.loadingTimers.forEach((timerId) => window.clearTimeout(timerId));
  state.loadingTimers = [];
}

function resetLoadingState() {
  clearLoadingTimers();
  loadingSteps.forEach((step) => {
    step.classList.remove("is-active", "is-complete");
  });
  loadingBarFill.style.width = "0%";
}

function markInputError(message) {
  memoryInput.classList.add("is-invalid");
  inputHelper.classList.add("is-error");
  inputHelper.textContent = message;
}

function resetInputHelper() {
  memoryInput.classList.remove("is-invalid");
  inputHelper.classList.remove("is-error");
  inputHelper.textContent =
    "입력한 기억은 장면 단위로 정리되어 나의 아카이브에 저장됩니다.";
}

function renderArchiveState() {
  archiveEmpty.hidden = state.archiveCreated;
  albumCard.hidden = !state.archiveCreated;
  archiveShelfStatus.textContent = state.archiveCreated
    ? "1개의 기억 앨범이 저장되어 있어요."
    : "아직 저장된 기억이 없습니다.";
}

function startLoadingSequence() {
  const loadingDuration = 3000;
  const stepDelay = 520;

  resetLoadingState();
  showPage("loading", { force: true });

  loadingSteps.forEach((step, index) => {
    const timerId = window.setTimeout(() => {
      loadingSteps.forEach((item, itemIndex) => {
        item.classList.toggle("is-active", itemIndex === index);
        if (itemIndex < index) {
          item.classList.add("is-complete");
        }
      });

      loadingBarFill.style.width = `${((index + 1) / loadingSteps.length) * 100}%`;
    }, index * stepDelay);

    state.loadingTimers.push(timerId);
  });

  state.loadingTimers.push(
    window.setTimeout(() => {
      loadingSteps.forEach((step) => {
        step.classList.remove("is-active");
        step.classList.add("is-complete");
      });
    }, loadingDuration - 260)
  );

  state.loadingTimers.push(
    window.setTimeout(() => {
      state.archiveCreated = true;
      state.isProcessing = false;
      restoreButton.disabled = false;
      restoreButton.textContent = "AI로 기억 복원하기";
      renderArchiveState();
      showPage("my-archive", { force: true });
    }, loadingDuration)
  );
}

function handleRestore() {
  const memoryText = memoryInput.value.trim();

  if (!memoryText) {
    markInputError("기억을 한 줄 이상 입력해 주세요. 예시 기억 불러오기를 먼저 눌러도 됩니다.");
    memoryInput.focus();
    return;
  }

  if (state.isProcessing) {
    return;
  }

  state.isProcessing = true;
  resetInputHelper();
  restoreButton.disabled = true;
  restoreButton.textContent = "기억 복원 중...";

  startLoadingSequence();
}

function openModal(modal) {
  modal.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal(modal) {
  modal.hidden = true;

  if (!Array.from(document.querySelectorAll(".modal")).some((item) => !item.hidden)) {
    document.body.classList.remove("modal-open");
  }
}

function setAlbumTab(tabName) {
  state.activeAlbumTab = tabName;

  albumTabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.albumTab === tabName);
  });

  albumTabPanels.forEach((panel) => {
    panel.hidden = panel.dataset.tabPanel !== tabName;
  });
}

function updateSceneDetail() {
  const scene = archiveRecord.scenes[state.currentSceneIndex];

  sceneCounter.textContent = `${state.currentSceneIndex + 1} / ${archiveRecord.scenes.length}`;
  sceneDetailId.textContent = scene.id;
  sceneDetailTitle.textContent = scene.title;
  sceneDetailType.textContent = scene.type;
  sceneDetailEmotions.textContent = scene.emotions;
  sceneDetailDescription.textContent = scene.description;
  sceneFallbackId.textContent = scene.id;
  sceneFallbackTitle.textContent = scene.title;

  sceneDetailMedia.classList.remove("is-missing");
  sceneDetailImage.alt = scene.title;
  sceneDetailImage.src = scene.image;

  prevSceneButton.disabled = state.currentSceneIndex === 0;
  nextSceneButton.disabled = state.currentSceneIndex === archiveRecord.scenes.length - 1;
}

function openAlbumModalView() {
  if (!state.archiveCreated) {
    return;
  }

  state.currentSceneIndex = 0;
  setAlbumTab("scenes");
  updateSceneDetail();
  openModal(albumModal);
}

function openPreview(index) {
  const record = exploreRecords[index];

  if (!record) {
    return;
  }

  previewId.textContent = record.id;
  previewTitle.textContent = record.title;
  previewDescription.textContent = record.description;
  previewEmotionRow.innerHTML = "";

  record.emotions.forEach((emotion) => {
    const chip = document.createElement("span");
    chip.className = "emotion-chip";
    chip.textContent = emotion;
    previewEmotionRow.append(chip);
  });

  openModal(previewModal);
}

function setupMediaFallbacks() {
  const mediaImages = Array.from(document.querySelectorAll(".media-frame img"));

  mediaImages.forEach((image) => {
    const frame = image.closest(".media-frame");

    const showFallback = () => {
      frame?.classList.add("is-missing");
    };

    const hideFallback = () => {
      frame?.classList.remove("is-missing");
    };

    image.addEventListener("error", showFallback);
    image.addEventListener("load", hideFallback);

    if (image.complete && image.naturalWidth === 0) {
      showFallback();
    }
  });
}

function setupFilmState() {
  const activateFallback = () => {
    filmPlayer.classList.remove("is-ready");
    filmPlayer.classList.add("is-fallback");
  };

  const activateReady = () => {
    filmPlayer.classList.remove("is-fallback");
    filmPlayer.classList.add("is-ready");
  };

  memoryFilm.addEventListener("loadeddata", activateReady);
  memoryFilm.addEventListener("error", activateFallback);
  memoryFilm.querySelector("source")?.addEventListener("error", activateFallback);

  window.setTimeout(() => {
    if (memoryFilm.readyState < 2) {
      activateFallback();
    }
  }, 1600);
}

pageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showPage(button.dataset.pageTarget);
  });
});

fillExampleButton.addEventListener("click", () => {
  memoryInput.value = exampleMemory;
  resetInputHelper();
});

restoreButton.addEventListener("click", handleRestore);
emptyArchiveAction?.addEventListener("click", () => showPage("restore"));

memoryInput.addEventListener("input", () => {
  if (memoryInput.value.trim()) {
    resetInputHelper();
  }
});

openAlbumButton?.addEventListener("click", openAlbumModalView);
closeAlbumModal.addEventListener("click", () => closeModal(albumModal));
closePreviewModal.addEventListener("click", () => closeModal(previewModal));

albumTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setAlbumTab(button.dataset.albumTab);
  });
});

prevSceneButton.addEventListener("click", () => {
  if (state.currentSceneIndex > 0) {
    state.currentSceneIndex -= 1;
    updateSceneDetail();
  }
});

nextSceneButton.addEventListener("click", () => {
  if (state.currentSceneIndex < archiveRecord.scenes.length - 1) {
    state.currentSceneIndex += 1;
    updateSceneDetail();
  }
});

previewCards.forEach((card) => {
  card.addEventListener("click", () => {
    openPreview(Number(card.dataset.previewIndex));
  });
});

document.querySelectorAll("[data-close-modal]").forEach((backdrop) => {
  backdrop.addEventListener("click", () => {
    const modalType = backdrop.dataset.closeModal;
    if (modalType === "album") {
      closeModal(albumModal);
    }
    if (modalType === "preview") {
      closeModal(previewModal);
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  if (!albumModal.hidden) {
    closeModal(albumModal);
  }

  if (!previewModal.hidden) {
    closeModal(previewModal);
  }
});

renderArchiveState();
setupMediaFallbacks();
setupFilmState();
showPage("home", { force: true });
