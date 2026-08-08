export function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details>
      <summary>
        {question}
        <span className="plus" />
      </summary>
      <p>{answer}</p>
    </details>
  );
}
