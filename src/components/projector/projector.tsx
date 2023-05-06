import { component$ } from '@builder.io/qwik';

export interface ProjectorProps {
  message: string;
}

export default component$((props: ProjectorProps) => {
  return <div>You typed: {props.message}</div>;
});
