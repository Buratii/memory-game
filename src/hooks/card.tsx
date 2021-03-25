import React, {
  ReactNode,
  createContext,
  useState,
  useCallback,
  useContext,
} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

interface UserProps {
  name: string;
  attempts: number;
}

interface CardContextData {
  attempts: number;
  leaderboard: UserProps[];
  loading: boolean;
  setCardAttempts: () => void;
  resetCardAttempts: () => void;
  registerPlayer: (user: UserProps) => Promise<void>
  getWinners: () => any[];
}

interface CardProviderProps {
  children: ReactNode;
}

const CardContext = createContext({} as CardContextData);

const CardProvider = ({ children }: CardProviderProps) => {
  const [attempts, setAttempts] = useState(0);
  const [leaderboard, setLeaderBoard] = useState<any[]>((): any[] => {
    AsyncStorage.getItem('@MemoryGame:leaderboard').then(storage => {
      if (!storage) return [];

      const parseOldScore = JSON.parse(storage);
      console.log('---IMSTORAGE---', storage);
      if (parseOldScore && parseOldScore.length > 0) {
        console.log('IM OK?!', parseOldScore);
        return [...parseOldScore];
      }
      return [];
    }).catch(err => {
      console.log('Err on getStorage', err);
      return [];
    });
    return [];
  });

  const [loading, setLoading] = useState(false);

  const newGetWinners = () => [...leaderboard];

  const newRegisterPlayer = useCallback(async (newLeaderboard) => {
    setLoading(true);
    const resultLeadboard = [...leaderboard, newLeaderboard];
    try {
      const storageData = await AsyncStorage.getItem('@MemoryGame:leaderboard');
      if (!storageData) return;
      const parsedStorage = JSON.parse(storageData);
      if (parsedStorage) {
        const newLeaderState = [...parsedStorage, newLeaderboard];
        setLeaderBoard([...newLeaderState]);
        await AsyncStorage.setItem('@MemoryGame:leaderboard', JSON.stringify(newLeaderState));
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, []);

  const setCardAttempts = () => {
    setAttempts(attempts + 1);
  };

  const resetCardAttempts = () => {
    setAttempts(0);
  };

  return (
    <CardContext.Provider value={{
      setCardAttempts,
      resetCardAttempts,
      registerPlayer: newRegisterPlayer,
      getWinners: newGetWinners,
      loading,
      leaderboard,
      attempts,
    }}>
      {children}
    </CardContext.Provider>
  );
};

function useCard(): CardContextData {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error('useCard must be used within an CardProvider');
  }

  return context;
}

export { CardProvider, useCard };
