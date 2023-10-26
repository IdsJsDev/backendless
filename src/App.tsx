import { useEffect, useState } from 'react';
import axios from 'axios';
import { SUPABASE } from './constants/supabase.ts';
import { ITab } from './interfaces/tabs.interface.ts';
import RouterComponent from './router/RouterComponent.tsx';
import { TabsContext } from './context/tabs.context.ts';

function App() {
  const [tabs, setTabs] = useState<ITab[]>();
  const [active, setActive] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get<ITab[]>(SUPABASE.uri, {
          headers: {
            apikey: SUPABASE.key,
          },
        });
        setTabs(data.sort((a, b) => a.order - b.order));
      } catch (error) {
        console.log(error);
      }
    };
    void getData();
  }, []);

  return (
    <TabsContext.Provider value={{ active, tabs, setActiveTab: setActive }}>
      <RouterComponent />
    </TabsContext.Provider>
  );
}

export default App;
