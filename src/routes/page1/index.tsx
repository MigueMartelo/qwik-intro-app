import { component$, useSignal } from '@builder.io/qwik';
import Projector from '~/components/projector/projector';

export default component$(() => {
  const valueSignal = useSignal('');
  return (
    <div>
      This is Page 1
      <hr />
      <input
        type='text'
        placeholder='Type your search'
        onChange$={(e) => (valueSignal.value = e.target.value)}
        value={valueSignal.value}
      />
      <hr />
      <Projector message={valueSignal.value} />
    </div>
  );
});
