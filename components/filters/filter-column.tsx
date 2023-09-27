import React from 'react';
import { Col, Label } from 'reactstrap';
import { FormGroup } from 'react-bootstrap';

interface IFilterColumnProps {
  label?: string;
  children: JSX.Element | JSX.Element[];
  col?: number | string;
}

const FilterColumn = ({ label, children, col = 3 }: IFilterColumnProps) => {
  return (
    <Col md={col}>
      <FormGroup>
        {label ? (
          <Label>
            {label}
          </Label>
        ) : null}
        {children}
      </FormGroup>
    </Col>
  );
};

export default FilterColumn;
