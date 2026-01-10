import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };
  return (
    <section className="flex flex-col gap-2">
      <div>FocusScreen</div>

      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="border p-2 rounded"
        autoFocus
      />
      <button
        className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600"
        onClick={handleClick}
      >
        Set focus
      </button>
    </section>
  );
};
