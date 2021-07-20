import React, { useContext } from 'react';

import ToastDispatchContext from '../../../contexts/ToastDispatchContext';
import ToastStateContext from '../../../contexts/ToastStateContext';
import Toast from '../toast';
import Action from '../../../reducers/toast/actions';
import Section from './styles';

const ToastsSection: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { toasts } = useContext(ToastStateContext);
  const dispatch = useContext(ToastDispatchContext);

  const deleteToast = (id: number) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch({
      type: Action.DELETE_TOAST,
      payload: id,
    });
  };

  return (
    <Section>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      {toasts.map(({ id, content, type }) => (
        <Toast deleteToast={deleteToast} key={id} type={type} id={id}>
          {content}
        </Toast>
      ))}
    </Section>
  );
};
export default ToastsSection;
