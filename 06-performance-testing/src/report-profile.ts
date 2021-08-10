import { ProfilerOnRenderCallback } from "react";

let queue: any[] = [];

setInterval(sendProfileQueue, 5000);

const reportProfile: ProfilerOnRenderCallback = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) => {
  queue.push({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  });
};

function sendProfileQueue() {
  if (!queue.length) {
    return Promise.resolve();
  }
  const queueToSend = [...queue];
  queue = [];
  console.log("Profiling queue", queueToSend);
  return Promise.resolve();
}

export default reportProfile;
