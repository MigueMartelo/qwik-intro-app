import { component$, useContext } from '@builder.io/qwik';
import { searchContextId } from '~/routes/page1/search-context-id';

export default component$(() => {
  const { messageSignal, colorSignal } = useContext(searchContextId);
  return (
    <div>
      You typed:{' '}
      <span style={`color: ${colorSignal.value}`}>{messageSignal.value}</span>
    </div>
  );
});
