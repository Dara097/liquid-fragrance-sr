/**
 * Twibbonize Campaign - ទឹកក្រអូប សម្រស់ចរណៃថ្មី
 * Locked Official Frame Engine:
 * - Official Frame permanently locked to 'assets/frame.png' (2000x2000 Ultra HD)
 * - 100% Khmer UI & Text
 * - Touch pan, two-finger pinch-to-zoom, mouse wheel zoom, rotation, flip
 * - Ultra-HD export
 * - Completely client-side & private
 */

(function () {
  // Permanent Official Frame Path (Locked for all visitors)
  const OFFICIAL_FRAME_SRC = 'assets/frame.png';

  // DOM Elements
  const canvas = document.getElementById('photoCanvas');
  const ctx = canvas.getContext('2d');
  const canvasWrapper = document.getElementById('canvasWrapper');
  const initialUploadOverlay = document.getElementById('initialUploadOverlay');
  const photoFileInput = document.getElementById('photoFileInput');
  const choosePhotoBtn = document.getElementById('choosePhotoBtn');
  const changePhotoBtn = document.getElementById('changePhotoBtn');
  const downloadPhotoBtn = document.getElementById('downloadPhotoBtn');
  const nativeShareBtn = document.getElementById('nativeShareBtn');
  const tryDemoPhotoBtn = document.getElementById('tryDemoPhotoBtn');
  const gestureHint = document.getElementById('gestureHint');
  const photoControlsCard = document.getElementById('photoControlsCard');
  const postUploadActionButtons = document.getElementById('postUploadActionButtons');

  // Sliders and Value Displays
  const zoomRange = document.getElementById('zoomRange');
  const zoomVal = document.getElementById('zoomVal');

  // Quick Action Buttons
  const rotateLeftBtn = document.getElementById('rotateLeftBtn');
  const rotateRightBtn = document.getElementById('rotateRightBtn');
  const flipHorizontalBtn = document.getElementById('flipHorizontalBtn');
  const resetTransformBtn = document.getElementById('resetTransformBtn');
  const fbCircleToggleBtn = document.getElementById('fbCircleToggleBtn');
  const fbCircleMask = document.getElementById('fbCircleMask');

  // Toast Notification
  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  const toastIcon = document.getElementById('toastIcon');

  // State
  let userImage = null;
  let officialFrameImage = null;
  let isFbCircleActive = false;

  // Image Transformation State
  let transform = {
    x: 0,
    y: 0,
    scale: 1.0,
    rotation: 0, // degrees
    flipH: 1 // 1 or -1
  };

  // Gesture Tracking State
  const activePointers = new Map();
  let initialPinchDistance = null;
  let initialScale = 1.0;
  let isDragging = false;
  let lastDragPos = { x: 0, y: 0 };
  let hasInteracted = false;

  // Initialize
  function init() {
    setupCanvas();
    loadOfficialFrame();
    setupEventListeners();
    window.addEventListener('resize', debounce(setupCanvas, 150));
  }

  // Setup internal canvas resolution
  function setupCanvas() {
    const rect = canvasWrapper.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = Math.floor(rect.width * dpr);

    if (canvas.width !== size || canvas.height !== size) {
      canvas.width = size;
      canvas.height = size;
    }
    render();
  }

  // Load the locked official frame
  function loadOfficialFrame() {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      officialFrameImage = img;
      render();
    };

    img.onerror = () => {
      // Fallback to sample-frame.png if frame.png is not found
      const fallbackImg = new Image();
      fallbackImg.onload = () => {
        officialFrameImage = fallbackImg;
        render();
      };
      fallbackImg.src = 'assets/sample-frame.png';
    };

    img.src = OFFICIAL_FRAME_SRC;
  }

  // User Profile Picture Loading
  function handleImageFile(file) {
    if (!file || !file.type.startsWith('image/')) {
      showToast('សូមជ្រើសរើសឯកសាររូបភាពត្រឹមត្រូវ (JPG, PNG, WEBP)', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        userImage = img;

        // Update UI to editing/ready state
        initialUploadOverlay.classList.add('hidden');
        choosePhotoBtn.classList.add('hidden');
        photoControlsCard.classList.remove('hidden');
        postUploadActionButtons.classList.remove('hidden');

        // Show gesture hint briefly
        if (gestureHint && !hasInteracted) {
          gestureHint.style.opacity = '1';
        }

        resetUserImageTransform();
        showToast('រូបថតត្រូវបានបញ្ចូលដោយជោគជ័យ! អូស ឬពង្រីករូបថតឱ្យត្រូវកណ្តាលស៊ុម', 'success');
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // Reset transform to fit image nicely centered
  function resetUserImageTransform() {
    if (!userImage) return;

    transform.x = 0;
    transform.y = 0;
    transform.rotation = 0;
    transform.flipH = 1;

    // Scale to cover the frame window
    transform.scale = 1.05;

    updateSliderControls();
    render();
  }

  function updateSliderControls() {
    zoomRange.value = transform.scale;
    zoomVal.textContent = transform.scale.toFixed(2) + 'x';
  }

  // Main Canvas Rendering Loop
  function render(targetCtx = ctx, targetWidth = canvas.width, targetHeight = canvas.height) {
    targetCtx.clearRect(0, 0, targetWidth, targetHeight);

    // Canvas base background
    targetCtx.fillStyle = '#181a1f';
    targetCtx.fillRect(0, 0, targetWidth, targetHeight);

    // 1. Draw Visitor's Photo (Behind the Frame)
    if (userImage) {
      targetCtx.save();
      targetCtx.translate(
        targetWidth / 2 + (transform.x * (targetWidth / 500)),
        targetHeight / 2 + (transform.y * (targetHeight / 500))
      );
      targetCtx.rotate((transform.rotation * Math.PI) / 180);
      targetCtx.scale(transform.flipH, 1);

      const imgAspect = userImage.width / userImage.height;
      let drawW, drawH;

      if (imgAspect >= 1) {
        drawH = targetHeight * transform.scale;
        drawW = drawH * imgAspect;
      } else {
        drawW = targetWidth * transform.scale;
        drawH = drawW / imgAspect;
      }

      targetCtx.imageSmoothingEnabled = true;
      targetCtx.imageSmoothingQuality = 'high';

      targetCtx.drawImage(
        userImage,
        -drawW / 2,
        -drawH / 2,
        drawW,
        drawH
      );

      targetCtx.restore();
    } else {
      // Dark neutral placeholder before photo is added
      targetCtx.save();
      targetCtx.fillStyle = '#181a1f';
      targetCtx.fillRect(0, 0, targetWidth, targetHeight);
      targetCtx.restore();
    }

    // 2. Draw Locked Official Frame (On Top with transparent circular cutout)
    if (officialFrameImage) {
      targetCtx.save();
      targetCtx.imageSmoothingEnabled = true;
      targetCtx.imageSmoothingQuality = 'high';
      targetCtx.drawImage(officialFrameImage, 0, 0, targetWidth, targetHeight);
      targetCtx.restore();
    }
  }

  // Setup Event Listeners
  function setupEventListeners() {
    // Choose photo triggers
    choosePhotoBtn.addEventListener('click', () => photoFileInput.click());
    changePhotoBtn.addEventListener('click', () => photoFileInput.click());
    initialUploadOverlay.addEventListener('click', () => photoFileInput.click());

    photoFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        handleImageFile(e.target.files[0]);
      }
    });

    // Drag and Drop over canvas wrapper
    canvasWrapper.addEventListener('dragover', (e) => {
      e.preventDefault();
      canvasWrapper.classList.add('border-[#00ba88]');
    });

    canvasWrapper.addEventListener('dragleave', () => {
      canvasWrapper.classList.remove('border-[#00ba88]');
    });

    canvasWrapper.addEventListener('drop', (e) => {
      e.preventDefault();
      canvasWrapper.classList.remove('border-[#00ba88]');
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleImageFile(e.dataTransfer.files[0]);
      }
    });

    // Try Sample Photo
    tryDemoPhotoBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      loadDemoProfilePhoto();
    });

    // Zoom Slider
    zoomRange.addEventListener('input', (e) => {
      transform.scale = parseFloat(e.target.value);
      zoomVal.textContent = transform.scale.toFixed(2) + 'x';
      dismissGestureHint();
      render();
    });

    // Quick Action Buttons
    resetTransformBtn.addEventListener('click', () => {
      resetUserImageTransform();
      showToast('បានកំណត់ទីតាំងទៅកណ្តាលវិញ', 'info');
    });

    rotateLeftBtn.addEventListener('click', () => {
      transform.rotation = (transform.rotation - 90) % 360;
      render();
    });

    rotateRightBtn.addEventListener('click', () => {
      transform.rotation = (transform.rotation + 90) % 360;
      render();
    });

    flipHorizontalBtn.addEventListener('click', () => {
      transform.flipH = transform.flipH === 1 ? -1 : 1;
      render();
      showToast('បានត្រឡប់រូបថត', 'info');
    });

    // FB Circle Outline Toggle
    fbCircleToggleBtn.addEventListener('click', () => {
      isFbCircleActive = !isFbCircleActive;
      if (isFbCircleActive) {
        fbCircleMask.classList.remove('hidden');
        fbCircleToggleBtn.classList.add('bg-[#00ba88]/20', 'text-[#00ba88]', 'border-[#00ba88]/40');
      } else {
        fbCircleMask.classList.add('hidden');
        fbCircleToggleBtn.classList.remove('bg-[#00ba88]/20', 'text-[#00ba88]', 'border-[#00ba88]/40');
      }
    });

    // Mouse Wheel Zoom
    canvasWrapper.addEventListener('wheel', (e) => {
      if (!userImage) return;
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 1.06 : 0.94;
      const newScale = Math.min(Math.max(transform.scale * zoomFactor, 0.2), 3.0);
      transform.scale = parseFloat(newScale.toFixed(2));
      updateSliderControls();
      dismissGestureHint();
      render();
    }, { passive: false });

    // Pointer Events for Touch Pan & Pinch-to-zoom
    canvasWrapper.addEventListener('pointerdown', onPointerDown);
    canvasWrapper.addEventListener('pointermove', onPointerMove);
    canvasWrapper.addEventListener('pointerup', onPointerUp);
    canvasWrapper.addEventListener('pointercancel', onPointerUp);

    // Download & Share
    downloadPhotoBtn.addEventListener('click', handleDownload);
    nativeShareBtn.addEventListener('click', handleNativeShare);
  }

  function dismissGestureHint() {
    if (!hasInteracted && gestureHint) {
      hasInteracted = true;
      gestureHint.style.opacity = '0';
      setTimeout(() => gestureHint.remove(), 400);
    }
  }

  function onPointerDown(e) {
    if (!userImage) return;
    canvasWrapper.setPointerCapture(e.pointerId);
    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (activePointers.size === 1) {
      isDragging = true;
      lastDragPos = { x: e.clientX, y: e.clientY };
    } else if (activePointers.size === 2) {
      isDragging = false;
      const pts = Array.from(activePointers.values());
      initialPinchDistance = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      initialScale = transform.scale;
    }
    dismissGestureHint();
  }

  function onPointerMove(e) {
    if (!userImage || !activePointers.has(e.pointerId)) return;
    activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    // Pinch to zoom (two fingers)
    if (activePointers.size === 2 && initialPinchDistance) {
      const pts = Array.from(activePointers.values());
      const currentDist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      const ratio = currentDist / initialPinchDistance;
      const targetScale = Math.min(Math.max(initialScale * ratio, 0.2), 3.0);
      transform.scale = parseFloat(targetScale.toFixed(2));
      updateSliderControls();
      render();
      return;
    }

    // Pan / Drag (single finger or mouse)
    if (isDragging && activePointers.size === 1) {
      const dx = e.clientX - lastDragPos.x;
      const dy = e.clientY - lastDragPos.y;
      lastDragPos = { x: e.clientX, y: e.clientY };

      const rect = canvasWrapper.getBoundingClientRect();
      const scaleFactor = 500 / rect.width;

      transform.x += dx * scaleFactor;
      transform.y += dy * scaleFactor;
      render();
    }
  }

  function onPointerUp(e) {
    activePointers.delete(e.pointerId);
    try {
      canvasWrapper.releasePointerCapture(e.pointerId);
    } catch (_) { }

    if (activePointers.size === 1) {
      isDragging = true;
      const remaining = Array.from(activePointers.values())[0];
      lastDragPos = { x: remaining.x, y: remaining.y };
      initialPinchDistance = null;
    } else if (activePointers.size === 0) {
      isDragging = false;
      initialPinchDistance = null;
    }
  }

  // Generate crisp export canvas matching frame's native resolution (2000x2000)
  function generateExportCanvas() {
    const exportCanvas = document.createElement('canvas');
    const exportW = officialFrameImage && officialFrameImage.naturalWidth ? officialFrameImage.naturalWidth : 2000;
    const exportH = officialFrameImage && officialFrameImage.naturalHeight ? officialFrameImage.naturalHeight : 2000;

    exportCanvas.width = exportW;
    exportCanvas.height = exportH;
    const exportCtx = exportCanvas.getContext('2d');

    render(exportCtx, exportW, exportH);
    return exportCanvas;
  }

  // Handle High-Res Download
  function handleDownload() {
    if (!userImage) {
      showToast('សូមជ្រើសរើសរូបថតរបស់អ្នកជាមុនសិន!', 'error');
      return;
    }

    showToast('កំពុងបង្កើតរូបភាពកម្រិតច្បាស់ HD...', 'info');

    setTimeout(() => {
      const exportCanvas = generateExportCanvas();
      exportCanvas.toBlob((blob) => {
        if (!blob) {
          showToast('បរាជ័យក្នុងការទាញយករូបភាព', 'error');
          return;
        }

        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ទឹកក្រអូប-សម្រស់ចរណៃថ្មី-profile.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showToast('បានទាញយករូបភាពដោយជោគជ័យ! រួចរាល់សម្រាប់ដាក់លើ Facebook Profile', 'success');
      }, 'image/png', 1.0);
    }, 50);
  }

  // Handle Native Web Share API
  async function handleNativeShare() {
    if (!userImage) {
      showToast('សូមជ្រើសរើសរូបថតរបស់អ្នកជាមុនសិន!', 'error');
      return;
    }

    const exportCanvas = generateExportCanvas();

    exportCanvas.toBlob(async (blob) => {
      if (!blob) return;

      const file = new File([blob], 'ទឹកក្រអូប-សម្រស់ចរណៃថ្មី.png', { type: 'image/png' });
      const captionText = captionBox ? captionBox.innerText : '';
      const shareData = {
        title: 'ទឹកក្រអូប សម្រស់ចរណៃថ្មី',
        text: captionText,
        files: [file]
      };

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share(shareData);
          showToast('បានចែករំលែកដោយជោគជ័យ!', 'success');
        } catch (err) {
          if (err.name !== 'AbortError') {
            fallbackShare();
          }
        }
      } else {
        fallbackShare();
      }
    }, 'image/png');
  }

  function fallbackShare() {
    handleDownload();
    showToast('បានទាញយករូបភាពរួចរាល់! អាចចែករំលែកលើ Facebook បាន', 'success');
  }

  // Toast Notification helper
  let toastTimer = null;
  function showToast(message, type = 'info') {
    if (!toastNotification) return;

    clearTimeout(toastTimer);
    toastMessage.textContent = message;

    if (type === 'success') {
      toastIcon.className = 'w-7 h-7 rounded-full bg-[#00ba88]/20 text-[#00ba88] flex items-center justify-center text-sm flex-shrink-0';
      toastIcon.innerHTML = '<i class="fa-solid fa-check"></i>';
    } else if (type === 'error') {
      toastIcon.className = 'w-7 h-7 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-sm flex-shrink-0';
      toastIcon.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
    } else {
      toastIcon.className = 'w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm flex-shrink-0';
      toastIcon.innerHTML = '<i class="fa-solid fa-circle-info"></i>';
    }

    toastNotification.classList.add('show');
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 3500);
  }

  // Demo Profile Photo Generator
  function loadDemoProfilePhoto() {
    showToast('កំពុងបញ្ចូលរូបថតគំរូ...', 'info');

    const demoCanvas = document.createElement('canvas');
    demoCanvas.width = 800;
    demoCanvas.height = 800;
    const dCtx = demoCanvas.getContext('2d');

    const grad = dCtx.createRadialGradient(400, 300, 50, 400, 400, 450);
    grad.addColorStop(0, '#fbcfe8');
    grad.addColorStop(0.5, '#f472b6');
    grad.addColorStop(1, '#db2777');
    dCtx.fillStyle = grad;
    dCtx.fillRect(0, 0, 800, 800);

    for (let i = 0; i < 30; i++) {
      dCtx.beginPath();
      dCtx.arc(
        100 + Math.random() * 600,
        100 + Math.random() * 600,
        10 + Math.random() * 40,
        0,
        Math.PI * 2
      );
      dCtx.fillStyle = `rgba(255, 255, 255, ${0.08 + Math.random() * 0.15})`;
      dCtx.fill();
    }

    // Avatar illustration
    // Head
    dCtx.beginPath();
    dCtx.arc(400, 340, 140, 0, Math.PI * 2);
    dCtx.fillStyle = '#ffedd5';
    dCtx.fill();

    // Smile
    dCtx.beginPath();
    dCtx.arc(400, 360, 50, 0.15 * Math.PI, 0.85 * Math.PI);
    dCtx.lineWidth = 8;
    dCtx.strokeStyle = '#c2410c';
    dCtx.lineCap = 'round';
    dCtx.stroke();

    // Eyes
    dCtx.beginPath();
    dCtx.arc(360, 320, 12, 0, Math.PI * 2);
    dCtx.arc(440, 320, 12, 0, Math.PI * 2);
    dCtx.fillStyle = '#431407';
    dCtx.fill();

    // Body
    dCtx.beginPath();
    dCtx.ellipse(400, 650, 240, 180, 0, 0, Math.PI * 2);
    dCtx.fillStyle = '#00ba88';
    dCtx.fill();

    const img = new Image();
    img.onload = () => {
      userImage = img;
      initialUploadOverlay.classList.add('hidden');
      choosePhotoBtn.classList.add('hidden');
      photoControlsCard.classList.remove('hidden');
      postUploadActionButtons.classList.remove('hidden');

      resetUserImageTransform();
      showToast('បានបញ្ចូលរូបថតគំរូ! សាកល្បងអូស ឬពង្រីក/បង្រួម', 'success');
    };
    img.src = demoCanvas.toDataURL('image/png');
  }

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  // Start app
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
