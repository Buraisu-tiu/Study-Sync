export {};

declare global {
  interface Window {
    electron: {
      getStudyTime: () => Promise<number>;
      saveStudyTime: (time: number) => void;
      openStats: () => void;
    };
  }
}
