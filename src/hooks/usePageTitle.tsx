import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

export function useDocumentTitle(title: string): void {
  useIsomorphicLayoutEffect(() => {
    window.document.title = title
      ? 'Tran Minh Bao Ngoc | ' + title
      : 'tran minh bao ngoc';
  }, [title]);
}
