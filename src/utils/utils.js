export const formatDate = (dateString) => {
  const currentDate = new Date()
  const originalDate = new Date(dateString)

  if (isNaN(originalDate.getTime())) {
    return "Ngày không hợp lệ"
  }

  const difference = currentDate - originalDate
  const seconds = Math.floor(difference / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(months / 12)

  if (minutes < 60) {
    return `${minutes} phút trước`
  } else if (hours < 24) {
    return `${hours} giờ trước`
  } else if (days < 30) {
    return `${days} ngày trước`
  } else if (months < 12) {
    return `${months} tháng trước`
  } else {
    return `${years} năm trước`
  }
}

export const isImageUrl = (url) => {
  return /\.(jpeg|jpg|gif|png|webp)$/.test(url)
}


export function handlePaste(event, mediaArray) {
  const clipboardData = event.clipboardData || window.clipboardData;
  const items = clipboardData.items;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (item.type.indexOf("image") !== -1) {
      const blob = item.getAsFile();
      const reader = new FileReader();
      reader.onload = (e) => {
        mediaArray.push({ url: e.target.result, type: 0 });
      };
      reader.readAsDataURL(blob);
    } else if (item.type === "text/plain") {
      item.getAsString((url) => {
        if (isImageUrl(url)) {
          mediaArray.push({ url: url, type: 0 });
        }
      });
    }
  }

  event.preventDefault();
}
