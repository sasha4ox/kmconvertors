self.addEventListener("install", () => {
    console.log("HI FROM SERVICE WORKER")
});

self.addEventListener("active", () => {
    console.log("HI FROM SERVICE WORKER")
});