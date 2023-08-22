import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../App.css";

function Example() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button
          key={idx}
          className="me-2 mb-2 btn-success"
          onClick={() => handleShow(v)}
        >
          Rules
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}
      <Modal
        className="bg-black"
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Games Rules</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Hi there!
          <p>
            <br /> ## Brief: <hr /> The Game of Life, also known simply as Life,
            is a cellular automaton devised by the British mathematician John
            Horton Conway in 1970.[1] It is a zero-player game,[2][3] meaning
            that its evolution is determined by its initial state, requiring no
            further input. One interacts with the Game of Life by creating an
            initial configuration and observing how it evolves. It is Turing
            complete and can simulate a universal constructor or any other
            Turing machine.
          </p>
          <p>
            <br /> ## Rules: <hr />
            The universe of the Game of Life is an infinite, two-dimensional
            orthogonal grid of square cells, each of which is in one of two
            possible states, live or dead (or populated and unpopulated,
            respectively). Every cell interacts with its eight neighbours, which
            are the cells that are horizontally, vertically, or diagonally
            adjacent. At each step in time, the following transitions occur:{" "}
            <br /> 1. Any live cell with fewer than two live neighbours dies, as
            if by underpopulation. <br />
            2. Any live cell with two or three live neighbours lives on to the
            next generation.
            <br /> 3. Any live cell with more than three live neighbours dies,
            as if by overpopulation.
            <br /> 4. Any dead cell with exactly three live neighbours becomes a
            live cell, as if by reproduction.
            <br /> These rules, which compare the behaviour of the automaton to
            real life, can be condensed into the following:
            <br /> 5. Any live cell with two or three live neighbours survives.
            <br /> 6. Any dead cell with three live neighbours becomes a live
            cell.
            <br /> 7. All other live cells die in the next generation.
            Similarly, all other dead cells stay dead.
            <br /> The initial pattern constitutes the seed of the system.
            <br /> The first generation is created by applying the above rules
            simultaneously to every cell in the seed, live or dead; births and
            deaths occur simultaneously, and the discrete moment at which this
            happens is sometimes called a tick.[nb 1] Each generation is a pure
            function of the preceding one. The rules continue to be applied
            repeatedly to create further generations.
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;
