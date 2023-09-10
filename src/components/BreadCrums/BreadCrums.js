import React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import styled from 'styled-components';

function BreadCrums() {
  return (
	 <Breadcrumbs>
		<Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
		<Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
		<Breadcrumbs.Crumb href="/sale/shoes">
			Shoes
		</Breadcrumbs.Crumb>
	</Breadcrumbs>
	)
}

export default BreadCrums;
