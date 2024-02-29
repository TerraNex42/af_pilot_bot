'use client';

import { useEffect, useMemo, useState } from 'react';
import { useBackButton, useInitData, useMainButton } from '@tma.js/sdk-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Tcas from '@/components/tcas/Tcas';


/**
 * Displays current application init data.
 */
function InitData() {
  const initData = useInitData();

  const initDataJson = useMemo(() => {
    if (!initData) {
      return 'Init data is empty.';
    }
    const { authDate, chat, hash, canSendAfter, queryId, receiver, user, startParam } = initData;

    return JSON.stringify({
      authDate,
      chat,
      hash,
      canSendAfter,
      queryId,
      receiver,
      user,
      startParam,
    }, null, ' ');
  }, [initData]);

  return (
    <pre>
      <code>
        {initDataJson}
      </code>
    </pre>
  );
}

export default function Home() {
  return (
    <Tabs defaultValue="Home" className="w-[400px] mt-2 px-4">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="Home">Home</TabsTrigger>
        <TabsTrigger value="Tcas">Tcas</TabsTrigger>
        <TabsTrigger value="GP">GP</TabsTrigger>
        <TabsTrigger value="TNP">TNP</TabsTrigger>
        <TabsTrigger value="Readme">Readme 👀</TabsTrigger>
      </TabsList>
      <TabsContent value="Home">This is home</TabsContent>
      <TabsContent value="Tcas">
        <Tcas />
      </TabsContent>
      <TabsContent value="GP">To be implemented</TabsContent>
      <TabsContent value="TNP">To be implemented</TabsContent>
      <TabsContent value="Readme">
        Find here the last change on the app
      </TabsContent>
    </Tabs>
  );
}
