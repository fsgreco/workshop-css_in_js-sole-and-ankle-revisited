/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { WEIGHTS } from '../../constants';


const Overlay = css`
	position: fixed;
	inset: 0;
	background: hsl(0deg 0% 0% / 0.8);
`
const Content = css`
	background: whitesmoke;
	width: min(80%, 300px);
	margin-left: auto;
	height: 100%;

	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`
const fontStyles = css`
	text-transform: uppercase;
	font-size: 1.2rem;
	color: var(--color-gray-900);
	text-decoration: none;
	font-weight: ${WEIGHTS.medium};
	a { text-decoration: none; color:var(--color-gray-900); }
`
const Nav = css`
	display: flex; flex-direction: column; gap: 1em; margin-right: auto; padding-left: 2em; 
	${fontStyles};
`

const Btn = css`
position:absolute; top:10px; right: 10px; 
`
const Footer = css`
	position: absolute;
	inset:0; bottom: 10px; top:unset;
	display: flex;
	font-size: 12px;
	gap: 1em;
	justify-content: center;
	a { text-decoration:none; color: var(--color-gray-900);}
`

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlay isOpen={isOpen} css={Overlay} >
			<DialogContent css={Content}>
				<UnstyledButton css={Btn} onClick={onDismiss}>
					<Icon id="close" />
					<VisuallyHidden>Dismiss Icon</VisuallyHidden>
				</UnstyledButton>
				<nav css={Nav}>
					<a href="/sale">Sale</a>
					<a href="/new">New&nbsp;Releases</a>
					<a href="/men">Men</a>
					<a href="/women">Women</a>
					<a href="/kids">Kids</a>
					<a href="/collections">Collections</a>
				</nav>
				<footer css={Footer}>
					<a href="/terms">Terms and Conditions</a>
					<a href="/privacy">Privacy Policy</a>
					<a href="/contact">Contact Us</a>
				</footer>
			</DialogContent>
    </DialogOverlay>
  );
};

export default MobileMenu;
