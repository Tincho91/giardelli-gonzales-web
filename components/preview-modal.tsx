"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import Info from "@/components/apply";
import Modal from "@/components/ui/modal";


const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const product = usePreviewModal((state) => state.data);

  if (!product) {
    return null;
  }

  return ( 
    <Modal 
      open={previewModal.isOpen} 
      onClose={previewModal.onClose}
    >
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} onClose={previewModal.onClose} isShortDescription={true}/>
        </div>
      </div>
    </Modal>
  );
}
 
export default PreviewModal;
