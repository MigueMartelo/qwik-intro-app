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
        onInput$={(e) =>
          (valueSignal.value = (e.target as HTMLInputElement).value)
        }
        value={valueSignal.value}
      />
      <hr />
      <Projector message={valueSignal.value} />
    </div>
  );
});
