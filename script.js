function handleClick(e) {
  // Fallback for browsers that don't support this API:
  if (!document.startViewTransition) {
    updateTheDOMSomehow();
    return;
  }

  // With a View Transition:
  document.startViewTransition(() => updateTheDOMSomehow());
}