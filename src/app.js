import React, { useCallback, useState } from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from './components/modal';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {

  const [modalActive, setModalActive] = useState(false);

  const list = store.getState().list;
  const cart = store.getState().cart;

  const callbacks = {
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onSelectItem: useCallback((code) => {
      store.selectItem(code);
    }, [store]),

    onAddItem: useCallback((item) => {
      store.addItem(item);
    }, [store])
  }

  return (
    <div>
      <PageLayout>
        <Head title='Магазин' />
        <Controls cart={cart} setModalActive={setModalActive} onAdd={callbacks.onAddItem} />
        <List list={list} action='Добавить'
          onActionWithItem={callbacks.onAddItem} />
      </PageLayout>
      <Modal cart={cart} active={modalActive} setModalActive={setModalActive} onDeleteItem={callbacks.onDeleteItem}/>
    </div>
  );
}

export default App;
