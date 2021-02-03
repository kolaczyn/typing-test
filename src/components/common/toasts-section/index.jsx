import React, { useState } from 'react';
import Toast from '../toast';

import Section from './styles';

const toastsData = [
  {
    id: 0,
    content: 'I am a toast',
  },
  {
    id: 1,
    content:
  'I am another toast',
  },
  {
    id: 2,
    content: 'Excuse me, I am an apple',
  },
];

export default function ToastsSection() {
  const [toasts, setToasts] = useState(toastsData);
  console.log(toasts);

  const deleteToast = (id) => {
    setToasts((oldToasts) => oldToasts.filter((toast) => toast.id !== id));
  };
  return (
    <Section>
      {toasts.map(({ id, content }) => (
        <Toast
          handleClick={() => deleteToast(id)}
          key={id}
        >
          {content}
        </Toast>
      ))}
    </Section>
  );
}
