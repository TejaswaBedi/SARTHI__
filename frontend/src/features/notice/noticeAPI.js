export function fetchAllNotices() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/notices");
    const data = await response.json();
    resolve({ data });
    //Todo - remove deleted notices from backend
  });
}

export function fetchNoticeById(noticeId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/notices/" + noticeId);
    const data = await response.json();
    resolve({ data });
  });
}

export function createNotice(notice) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/notices/", {
      method: "POST",
      body: JSON.stringify(notice),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateNotice(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/notices/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
  // On backend it will not store password
}
