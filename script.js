const exampleMemory = `오늘 정희와 대천 바닷가에 다녀왔다. 대천은 가장 가까운 바다라 여러 번 갔고 질릴 법도 한데, 이상하게 갈 때마다 늘 새롭고 즐겁다. 정희가 운전해서 갔고 나는 어제 밤을 새운 탓에 가는 내내 조수석에서 잠들어 있었다. 도착하자마자 바다를 봤을 때 그동안 마음속에 쌓여 있던 답답한 것들이 한꺼번에 풀리는 기분이 들었다. 그렇게 바다를 바라보다가 갑자기 정희가 짚라인을 타자고 해서 탔다. 처음 타봤는데 너무 재밌어서 두 번이나 탔다. 저녁에는 조개구이를 먹었다. 정희가 운전해야 해서 술은 마시지 못했지만 다음을 기약하기로 했다. 정말 오랜만에 제대로 쉬었다는 느낌이 들었다. 쉬는 게 꼭 집에서 누워 있는 것만은 아니라는 생각을 했다.`;

const myArchiveAlbum = {
  id: "RE-20220306",
  title: "대천 바다에 간 날",
  visibilityLabel: "저장된 기억 앨범",
  statusBadge: "Archived",
  coverImage: "assets/scene02.png",
  coverAlt: "대천 바다에 간 날 대표 장면",
  coverFallback: "대천 바다에 간 날",
  summary: "친구와 함께 바다에 다녀온 하루가 하나의 기억 앨범으로 정리되었습니다.",
  recordType: "개인 일기 / 기억 기록 / 감정 아카이브",
  date: "2022.03.06",
  location: "대천 바닷가",
  people: "나, 정희",
  emotions: "해방감, 즐거움, 힐링, 아쉬움, 충만함",
  keywords: "바다, 드라이브, 친구, 짚라인, 조개구이, 휴식, 힐링",
  noteLabel: "보존 가치",
  note:
    "친구와 함께 대천 바다에 다녀온 하루를 기록한 개인 기억. 바다를 보며 느낀 해방감, 갑작스러운 짚라인 체험, 저녁 식사와 휴식에 대한 생각의 변화가 담겨 있다.",
  film: {
    source: "assets/archive-film.mp4",
    description: "저장된 장면들을 하나의 흐름으로 다시 볼 수 있습니다.",
    emptyMessage: "아직 기억 필름이 업로드되지 않았습니다.",
    emptyCaption: "기억 필름이 준비되면 이곳에서 바로 재생됩니다.",
  },
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

const publicArchives = [
  {
    id: "RE-20160505",
    title: "우리 딸 지우가 처음 동물원에 간 날",
    visibilityLabel: "공개 아카이브",
    statusBadge: "Public",
    coverImage: "assets/public-zoo.png",
    coverAlt: "동물원에 간 날 대표 장면",
    coverFallback: "우리 딸 지우가 처음 동물원에 간 날",
    summary: "작은 손으로 유리창을 짚고 동물을 바라보던 아이의 첫 동물원 기억.",
    date: "2016.05.05",
    location: "동물원",
    emotions: "기쁨, 신기함, 애틋함",
    keywords: "딸, 동물원, 어린 시절, 가족, 첫 경험",
    noteLabel: "보관 메모",
    note: "아이가 처음 동물원에 갔던 날의 기억을 담은 공개 아카이브",
    cardEmotions: ["기쁨", "신기함", "애틋함"],
    film: {
      source: "",
      description: "이 공개 아카이브에 연결된 기억 필름이 있으면 이곳에서 볼 수 있습니다.",
      emptyMessage: "이 공개 아카이브에는 기억 필름이 없습니다.",
      emptyCaption: "대표 장면 이미지를 통해 이 기억을 먼저 살펴볼 수 있습니다.",
    },
    scenes: [
      {
        id: "RE-20160505-S01",
        title: "유리창 너머 동물을 바라보던 순간",
        type: "관찰 장면",
        emotions: "기쁨, 신기함, 애틋함",
        description: "작은 손으로 유리창을 짚고 조심스럽게 동물을 바라보던 순간.",
        image: "assets/public-zoo.png",
      },
    ],
  },
  {
    id: "RE-20220718",
    title: "할머니 집 마당에서 수박 먹던 오후",
    visibilityLabel: "공개 아카이브",
    statusBadge: "Public",
    coverImage: "assets/public-watermelon.png",
    coverAlt: "수박 먹던 오후 대표 장면",
    coverFallback: "할머니 집 마당에서 수박 먹던 오후",
    summary: "선풍기 바람과 마당 냄새, 손에 묻은 수박물이 남아 있는 기억.",
    date: "2022.07.18",
    location: "할머니 집 마당",
    emotions: "여름, 그리움, 평온",
    keywords: "여름, 수박, 마당, 할머니 집, 가족",
    noteLabel: "보관 메모",
    note: "한여름 오후의 공기와 조용한 평온이 남아 있는 공개 아카이브",
    cardEmotions: ["여름", "그리움", "평온"],
    film: {
      source: "",
      description: "이 공개 아카이브에 연결된 기억 필름이 있으면 이곳에서 볼 수 있습니다.",
      emptyMessage: "이 공개 아카이브에는 기억 필름이 없습니다.",
      emptyCaption: "대표 장면 이미지를 통해 이 기억을 먼저 살펴볼 수 있습니다.",
    },
    scenes: [
      {
        id: "RE-20220718-S01",
        title: "마당에서 수박을 나누던 오후",
        type: "일상 장면",
        emotions: "여름, 그리움, 평온",
        description:
          "선풍기 바람과 수박 냄새, 손에 남은 차가운 감촉까지 떠오르는 여름 오후.",
        image: "assets/public-watermelon.png",
      },
    ],
  },
  {
    id: "RE-20201115",
    title: "고등학교 야자 끝나고 먹은 컵라면",
    visibilityLabel: "공개 아카이브",
    statusBadge: "Public",
    coverImage: "assets/public-ramen.png",
    coverAlt: "컵라면 먹던 밤 대표 장면",
    coverFallback: "고등학교 야자 끝나고 먹은 컵라면",
    summary: "늦은 밤 친구들과 편의점 앞에서 먹던 컵라면의 기억.",
    date: "2020.11.15",
    location: "편의점 앞",
    emotions: "피곤함, 우정, 따뜻함",
    keywords: "고등학교, 야자, 편의점, 컵라면, 친구",
    noteLabel: "보관 메모",
    note: "늦은 밤 친구들과 함께했던 소소한 위로의 시간을 담은 공개 아카이브",
    cardEmotions: ["피곤함", "우정", "따뜻함"],
    film: {
      source: "",
      description: "이 공개 아카이브에 연결된 기억 필름이 있으면 이곳에서 볼 수 있습니다.",
      emptyMessage: "이 공개 아카이브에는 기억 필름이 없습니다.",
      emptyCaption: "대표 장면 이미지를 통해 이 기억을 먼저 살펴볼 수 있습니다.",
    },
    scenes: [
      {
        id: "RE-20201115-S01",
        title: "편의점 앞에서 먹던 늦은 컵라면",
        type: "식사 장면",
        emotions: "피곤함, 우정, 따뜻함",
        description:
          "야자가 끝난 뒤 친구들과 편의점 앞에서 컵라면을 먹으며 하루를 마무리하던 순간.",
        image: "assets/public-ramen.png",
      },
    ],
  },
];

const state = {
  currentPage: "home",
  archiveCreated: false,
  isProcessing: false,
  currentSceneIndex: 0,
  activeAlbumTab: "scenes",
  activeAlbum: myArchiveAlbum,
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
const exploreGrid = document.getElementById("exploreGrid");
const albumModal = document.getElementById("albumModal");
const closeAlbumModal = document.getElementById("closeAlbumModal");
const albumModalBadge = document.getElementById("albumModalBadge");
const albumModalTitle = document.getElementById("albumModalTitle");
const modalRecordId = document.getElementById("modalRecordId");
const modalStatusBadge = document.getElementById("modalStatusBadge");
const modalRecordTitle = document.getElementById("modalRecordTitle");
const modalRecordTypeBlock = document.getElementById("modalRecordTypeBlock");
const modalRecordType = document.getElementById("modalRecordType");
const modalRecordDate = document.getElementById("modalRecordDate");
const modalRecordLocation = document.getElementById("modalRecordLocation");
const modalPeopleBlock = document.getElementById("modalPeopleBlock");
const modalRecordPeople = document.getElementById("modalRecordPeople");
const modalRecordEmotions = document.getElementById("modalRecordEmotions");
const modalRecordKeywords = document.getElementById("modalRecordKeywords");
const modalNoteBlock = document.getElementById("modalNoteBlock");
const modalNoteLabel = document.getElementById("modalNoteLabel");
const modalRecordNote = document.getElementById("modalRecordNote");
const albumTabButtons = Array.from(document.querySelectorAll("[data-album-tab]"));
const filmTabButton = document.getElementById("filmTabButton");
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
const memoryFilmSource = document.getElementById("memoryFilmSource");
const filmPlayer = document.getElementById("filmPlayer");
const filmDescription = document.getElementById("filmDescription");
const filmEmptyMessage = document.getElementById("filmEmptyMessage");
const filmEmptyCaption = document.getElementById("filmEmptyCaption");

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
  inputHelper.textContent = "입력한 기억은 장면 단위로 정리되어 나의 아카이브에 저장됩니다.";
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
  const availableTab =
    tabName === "film" && filmTabButton.hidden ? "scenes" : tabName;

  state.activeAlbumTab = availableTab;

  albumTabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.albumTab === availableTab);
  });

  albumTabPanels.forEach((panel) => {
    panel.hidden = panel.dataset.tabPanel !== availableTab;
  });
}

function renderFilmForAlbum(album) {
  const film = album.film || {};
  const hasFilmTab = film.showTab !== false;
  const filmSource = film.source || "";

  filmTabButton.hidden = !hasFilmTab;
  filmDescription.textContent =
    film.description || "저장된 장면들을 하나의 흐름으로 다시 볼 수 있습니다.";
  filmEmptyMessage.textContent =
    film.emptyMessage || "아직 기억 필름이 업로드되지 않았습니다.";
  filmEmptyCaption.textContent =
    film.emptyCaption || "기억 필름이 준비되면 이곳에서 바로 재생됩니다.";

  filmPlayer.classList.remove("is-ready");
  filmPlayer.classList.add("is-fallback");

  memoryFilm.pause();
  memoryFilmSource.src = filmSource;
  memoryFilm.load();
}

function updateSceneDetail() {
  const activeAlbum = state.activeAlbum;
  const scene = activeAlbum.scenes[state.currentSceneIndex];

  sceneCounter.textContent = `${state.currentSceneIndex + 1} / ${activeAlbum.scenes.length}`;
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
  nextSceneButton.disabled = state.currentSceneIndex === activeAlbum.scenes.length - 1;
}

function renderAlbumModal(album) {
  state.activeAlbum = album;
  state.currentSceneIndex = 0;

  albumModalBadge.textContent = album.visibilityLabel;
  albumModalTitle.textContent = album.title;
  modalRecordId.textContent = album.id;
  modalStatusBadge.textContent = album.statusBadge || "Archived";
  modalRecordTitle.textContent = album.title;
  modalRecordDate.textContent = album.date;
  modalRecordLocation.textContent = album.location;
  modalRecordEmotions.textContent = album.emotions;
  modalRecordKeywords.textContent = album.keywords;
  modalNoteLabel.textContent = album.noteLabel || "보관 메모";
  modalRecordNote.textContent = album.note;

  modalRecordTypeBlock.hidden = !album.recordType;
  modalRecordType.textContent = album.recordType || "";

  modalPeopleBlock.hidden = !album.people;
  modalRecordPeople.textContent = album.people || "";

  modalNoteBlock.hidden = !album.note;

  renderFilmForAlbum(album);
  setAlbumTab("scenes");
  updateSceneDetail();
  openModal(albumModal);
}

function openAlbumModalView() {
  if (!state.archiveCreated) {
    return;
  }

  renderAlbumModal(myArchiveAlbum);
}

function buildEmotionChips(emotions) {
  return emotions
    .map((emotion) => `<span class="emotion-chip">${emotion}</span>`)
    .join("");
}

function renderExploreGrid() {
  exploreGrid.innerHTML = publicArchives
    .map(
      (archive, index) => `
        <button class="paper-card explore-card" type="button" data-public-archive-index="${index}">
          <figure class="explore-card-media media-frame">
            <img src="${archive.coverImage}" alt="${archive.coverAlt}" loading="lazy" />
            <figcaption class="media-fallback">
              <span>공개 아카이브</span>
              <strong>${archive.coverFallback}</strong>
            </figcaption>
          </figure>
          <div class="explore-card-content">
            <span class="card-tag">공개 아카이브</span>
            <strong class="explore-id">${archive.id}</strong>
            <h3>${archive.title}</h3>
            <div class="emotion-row">${buildEmotionChips(archive.cardEmotions)}</div>
            <p>${archive.summary}</p>
          </div>
        </button>
      `
    )
    .join("");

  exploreGrid.querySelectorAll("[data-public-archive-index]").forEach((card) => {
    card.addEventListener("click", () => {
      const archive = publicArchives[Number(card.dataset.publicArchiveIndex)];
      if (archive) {
        renderAlbumModal(archive);
      }
    });
  });
}

function setupMediaFallbacks(root = document) {
  const mediaImages = Array.from(root.querySelectorAll(".media-frame img"));

  mediaImages.forEach((image) => {
    if (image.dataset.fallbackBound === "true") {
      return;
    }

    image.dataset.fallbackBound = "true";

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
  memoryFilmSource.addEventListener("error", activateFallback);
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
  if (state.currentSceneIndex < state.activeAlbum.scenes.length - 1) {
    state.currentSceneIndex += 1;
    updateSceneDetail();
  }
});

document.querySelectorAll("[data-close-modal]").forEach((backdrop) => {
  backdrop.addEventListener("click", () => {
    if (backdrop.dataset.closeModal === "album") {
      closeModal(albumModal);
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
});

renderArchiveState();
renderExploreGrid();
setupMediaFallbacks();
setupFilmState();
showPage("home", { force: true });
