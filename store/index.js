import create from 'zustand';

function setStore(set, get) {
  const mystore = {
    isReady: false,
    setIsReady: isReady => set(state => ({isReady})),
    name: 'Renaud',
    ville: 'Grenoble'
  };

  return mystore;
}

export const useStore = create((set, get) => setStore(set, get));