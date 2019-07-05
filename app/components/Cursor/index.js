/**
 *
 * Cursor
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const CursorInner = styled.div`
  z-index: 9999;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: difference; /* New */
  border-radius: 50%;
`;

const InnerDot = styled.div`
  width: 6px;
  height: 6px;
  background: #fff;
`;

const InnerCircle = styled.div`
  width: 20px;
  height: 20px;
  border: 4px solid #fff;
`;

const LinkStyled = styled.a`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Cursor() {
  {
    const node = ReactDOM.findDOMNode(this);
    const lerp = (a, b, n) => (1 - n) * a + n * b;

    const getMousePos = e => {
      let posx = 0;
      let posy = 0;
      if (!e) e = window.event;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx =
          e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
      }
      return { x: posx, y: posy };
    };

    class CursorFx {
      constructor(el) {
        this.DOM = { el };
        this.DOM.dot = this.DOM.el.querySelector('InnerDot');
        this.DOM.circle = this.DOM.el.querySelector('InnerCircle');
        this.bounds = {
          dot: this.DOM.dot.getBoundingClientRect(),
          circle: this.DOM.circle.getBoundingClientRect(),
        };
        this.scale = 1;
        this.opacity = 1;
        this.mousePos = { x: -44, y: -44 }; // set position outside screen
        this.lastMousePos = { dot: { x: 0, y: 0 }, circle: { x: 0, y: 0 } };
        this.lastScale = 1;
        this.lastOpacity = 1;

        this.initEvents();
        requestAnimationFrame(() => this.render());
      }

      initEvents() {
        window.addEventListener(
          'mousemove',
          ev => (this.mousePos = getMousePos(ev)),
        );
      }

      render() {
        this.lastMousePos.dot.x = lerp(
          this.lastMousePos.dot.x,
          this.mousePos.x - this.bounds.dot.width / 2,
          1,
        );
        this.lastMousePos.dot.y = lerp(
          this.lastMousePos.dot.y,
          this.mousePos.y - this.bounds.dot.height / 2,
          1,
        );
        this.lastMousePos.circle.x = lerp(
          this.lastMousePos.circle.x,
          this.mousePos.x - this.bounds.circle.width / 2,
          0.15,
        );
        this.lastMousePos.circle.y = lerp(
          this.lastMousePos.circle.y,
          this.mousePos.y - this.bounds.circle.height / 2,
          0.15,
        );
        this.lastScale = lerp(this.lastScale, this.scale, 0.15);
        this.lastOpacity = lerp(this.lastOpacity, this.opacity, 0.1);
        this.DOM.dot.style.transform = `translateX(${
          this.lastMousePos.dot.x
        }px) translateY(${this.lastMousePos.dot.y}px)`;
        this.DOM.circle.style.transform = `translateX(${
          this.lastMousePos.circle.x
        }px) translateY(${this.lastMousePos.circle.y}px) scale(${
          this.lastScale
        })`;
        this.DOM.circle.style.opacity = this.lastOpacity;
        requestAnimationFrame(() => this.render());
      }

      enter() {
        cursor.scale = 4.4;
      }

      leave() {
        cursor.scale = 1;
      }

      click() {
        this.lastScale = 1;
        this.lastOpacity = 0;
      }
    }

    const cursor = new CursorFx(document.querySelector('.cursor'));
    [...document.querySelectorAll('[data-hover]')].forEach(link => {
      link.addEventListener('mouseenter', () => cursor.enter());
      link.addEventListener('mouseleave', () => cursor.leave());
      link.addEventListener('click', () => cursor.click());
    });
  }

  return (
    <Cursor>
      <CursorInner>
        <InnerCircle />
        <InnerDot />
      </CursorInner>
    </Cursor>
  );
}

Cursor.propTypes = {};

export default Cursor;
