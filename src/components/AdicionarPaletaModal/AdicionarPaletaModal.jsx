import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import "./AdicionarPaletaModal.css";
import { PaletaService } from "../../services/PaletaService";

function AdicionaPaletaModal({ closeModal }) {
  const form = {
    preco: "",
    sabor: "",
    recheio: "",
    descricao: "",
    foto: "",
  };

  const [state, setState] = useState(form);
  const [canDisable, setCanDisable] = useState(false);

  const canDisableSendButton = () => {
    const response = !Boolean(
      state.descricao.length &&
        state.foto.length &&
        state.sabor.length &&
        state.preco.length
    );

    setCanDisable(response);
  };

  const handleChange = (e, name) => {
    setState({ ...state, [name]: e.target.value });
  };

  useEffect(() => {
    canDisableSendButton();
  });

  return (
    <Modal closeModal={closeModal}>
      <div className="AdicionaPaletaModal">
        <form autoComplete="off">
          <h2> Adicionar ao Cardápio </h2>
          <div>
            <label className="AdicionaPaletaModal__text" htmlFor="preco">
              {" "}
              Preco:{" "}
            </label>
            <input
              id="preco"
              placeholder="10,00"
              type="text"
              value={state.preco}
              onChange={(e) => handleChange(e, "preco")}
            />
          </div>
          <div>
            <label className="AdicionaPaletaModal__text" htmlFor="sabor">
              {" "}
              Sabor:{" "}
            </label>
            <input
              id="sabor"
              placeholder="Chocolate"
              type="text"
              value={state.sabor}
              onChange={(e) => handleChange(e, "sabor")}
            />
          </div>
          <div>
            <label className="AdicionaPaletaModal__text" htmlFor="recheio">
              {" "}
              Recheio:{" "}
            </label>
            <input
              id="recheio"
              placeholder="Banana"
              type="text"
              value={state.recheio}
              onChange={(e) => handleChange(e, "recheio")}
            />
          </div>
          <div>
            <label className="AdicionaPaletaModal__text" htmlFor="descricao">
              {" "}
              Descricao:{" "}
            </label>
            <input
              id="descricao"
              placeholder="Detalhe o produto"
              type="text"
              value={state.descricao}
              onChange={(e) => handleChange(e, "descricao")}
            />
          </div>
          <div>
            <label
              className="AdicionaPaletaModal__text  AdicionaPaletaModal__foto-label"
              htmlFor="foto"
            >
              {!state.foto.length ? "Selecionar Imagem" : state.foto}
            </label>
            <input
              className=" AdicionaPaletaModal__foto"
              id="foto"
              type="file"
              accept="image/png, image/gif, image/jpeg"
              value={state.foto}
              onChange={(e) => handleChange(e, "foto")}
            />
          </div>

          <button
            className="AdicionaPaletaModal__enviar"
            type="button"
            disabled={canDisable}
          >
            Enviar
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AdicionaPaletaModal;
