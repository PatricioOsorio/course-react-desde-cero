import React, { useOptimistic } from 'react';

import { useState } from 'react';

interface IComment {
  id: number;
  text: string;
  optimistic?: boolean;
}

export const InstagramApp = () => {
  const [comments, setComments] = useState<IComment[]>([
    { id: 1, text: '¡Gran foto!' },
    { id: 2, text: 'Me encanta 🧡' },
  ]);

  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (currentComments, newComment: string) => {
      return [
        ...currentComments,
        {
          id: new Date().getTime(),
          text: newComment,
          optimistic: true,
        },
      ];
    }
  );

  const handleAddComment = async (form: FormData) => {
    const messageText = form.get('post-message') as string;

    addOptimisticComment(messageText);

    // simulates
    await new Promise((r) => setTimeout(r, 1000));

    console.log('write on DB');

    setComments((p) => [
      ...p,
      {
        id: new Date().getTime(),
        text: messageText,
      },
    ]);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Post de ejemplo */}
      <div className="flex flex-col items-center justify-center bg-gray-800 rounded-t-3xl p-4 w-[500px]">
        <img
          src="https://picsum.photos/200/300"
          alt="Instagrom"
          className="object-cover rounded-xl mb-4"
        />
        <p className=" font-bold mb-4">
          Mira que interesante esta funcionalidad de la API de React.
        </p>
      </div>

      {/* Comentarios */}
      <ul className="flex flex-col items-start justify-center bg-gray-800 w-[500px] p-4">
        {optimisticComments.map((comment) => (
          <li key={comment.id} className="flex items-center gap-2 mb-2">
            <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-white text-center">A</span>
            </div>
            <p className="">{comment.text}</p>
            {comment.optimistic && <span className="text-gray-500 text-sm">enviando... </span>}
          </li>
        ))}
      </ul>

      {/* Formulario de comentarios */}
      <form
        action={handleAddComment}
        className="flex flex-col items-center justify-center bg-gray-800 w-[500px] rounded-b-3xl p-4"
      >
        <input
          type="text"
          name="post-message"
          placeholder="Escribe un comentario"
          required
          className="w-full p-2 rounded-md mb-2 border-2 border-gray-500 "
        />
        <button type="submit" disabled={false}>
          Enviar
        </button>
      </form>
    </div>
  );
};
