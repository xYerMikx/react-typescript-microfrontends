export {};

declare global {
  interface Window {
    CartModule: {
      get: () => () => React.ComponentType;
      init: () => Promise<void>;
    };
  }
}
