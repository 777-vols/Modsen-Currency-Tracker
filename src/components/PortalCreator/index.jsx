import createWrapperAndAppendToBody from '@helpers/createWrapperAndAppendToBody';
import PropTypes from 'prop-types';
import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function PortalCreator({ children, wrapperId = 'react-portal-wrapper' }) {
  const [wrapperElement, setWrapperElement] = useState(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let elementCreated = false;

    if (!element) {
      elementCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      if (elementCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
}

PortalCreator.propTypes = {
  children: PropTypes.element,
  wrapperId: PropTypes.string
};
