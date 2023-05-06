import { Slot, component$ } from '@builder.io/qwik';

export interface ProjectorProps {
  message: string;
  color: string;
}

export default component$((props: ProjectorProps) => {
  return (
    <div>
      <Slot /> <span style={`color: ${props.color}`}>{props.message}</span>
    </div>
  );
});
