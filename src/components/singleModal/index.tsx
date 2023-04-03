interface SingleModalStruct {
  content: JSX.Element;
}

const SingleModal = ({ content }: SingleModalStruct) => {
  return (
    <dialog open >
      {content}
    </dialog>
  )
};
export default SingleModal;