import { useEffect, useRef, useState, type FormEvent } from "react";
import { X, ArrowRight, EnvelopeSimple } from "@phosphor-icons/react";

export function EarlyAccess({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (open) {
      setReady(false);
      setCopied(false);
      dialog.current?.showModal();
    } else dialog.current?.close();
  }, [open]);
  const body = `Hello Our Story team,\n\nI'd like to learn about early access.\n\nName: ${name}\nEmail: ${email}\n\nThank you!`;
  function submit(event: FormEvent) {
    event.preventDefault();
    setReady(true);
  }
  return (
    <dialog
      ref={dialog}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-labelledby="access-title"
    >
      <button
        className="close"
        aria-label="Close early access"
        onClick={onClose}
      >
        <X size={22} />
      </button>
      <span className="eyebrow">LET’S MAKE SOMETHING TOGETHER</span>
      <h2 id="access-title">
        Be part of
        <br />
        <em>our next chapter.</em>
      </h2>
      {!ready ? (
        <>
          <p>
            Interested in trying Our Story? Tell us a little about yourself and
            send an early access request to our team.
          </p>
          <form onSubmit={submit}>
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={100}
            />
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={254}
            />
            <button className="button primary" type="submit">
              Prepare my request <ArrowRight size={18} />
            </button>
            <small>
              We’ll open an email draft for you to send. Your details aren’t
              submitted by this website.
            </small>
          </form>
        </>
      ) : (
        <div className="request-ready">
          <p>
            Your request is ready. Open your email app and send it to{" "}
            <strong>info@ourstory.team</strong>.
          </p>
          <a
            className="button primary"
            href={`mailto:info@ourstory.team?subject=${encodeURIComponent("Our Story early access request")}&body=${encodeURIComponent(body)}`}
          >
            Open email draft <EnvelopeSimple size={20} />
          </a>
          <button
            className="text-button"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(body);
                setCopied(true);
              } catch {
                setCopied(false);
              }
            }}
          >
            {copied ? "Request copied" : "Copy request instead"}
          </button>
          <small>
            No request has been sent yet. Send the email to complete your
            request.
          </small>
        </div>
      )}
    </dialog>
  );
}
