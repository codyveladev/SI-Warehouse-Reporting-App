import React from 'react'
import {Container} from 'react-bootstrap'

export default function DashHeader({title}) {
    return (
      <Container fluid className="mt-4">
        <div className="my-4">
          <h1 className="text-primary text-center display-3">
            {title}
          </h1>
        </div>
      </Container>
    );
}
