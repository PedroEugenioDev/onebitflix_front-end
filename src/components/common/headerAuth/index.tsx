import { Container, Form, Input, Modal } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactModal from "react-modal";
import profileService from "@/src/services/profileServices";

ReactModal.setAppElement("#__next")

const HeaderAuth = function () {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState(false);
    const [initials, setInitials] = useState("");
    const handleOpenModal = () => {
        setModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
    };
    const handleLogout = () => {
        sessionStorage.clear();
      router.push("/");
    };

    useEffect(() => {
        profileService.fetchCurrent().then((user) => {
            const firstNameInitial = user.firstName.slice(0, 1);
            const lastNameInitial = user.lastName.slice(0, 1);
            setInitials(firstNameInitial + lastNameInitial);
      });
    }, []);

  return <>
     <Container className={styles.nav}>
	    <Link href="/home">
	        <img src="/logoOnebitflix.svg" alt="logoOnebitflix" className={styles.imgLogoNav}/>
        </Link>
	    <div className="d-flex align-items-center">
            <Form>
		        <Input
		            name="search"
                    type="search"
                    placeholder="Pesquisar"
                    className={styles.input}
	            />
	        </Form>
		    <img
                src="/homeAuth/iconSearch.svg"
                alt="lupaHeader"
                className={styles.searchImg}
	        />
	        <p className={styles.userProfile} onClick={handleOpenModal} >{initials}</p>
        </div>
        <ReactModal
            isOpen={modalOpen}
            onRequestClose={handleCloseModal}
            shouldCloseOnEsc={true}
            className={styles.modal}
            overlayClassName={styles.overlayModal}
        >
            <Link href="/profile">
	            <p className={styles.modalLink}>Meus Dados</p>
            </Link>
	        <p className={styles.modalLink} onClick={handleLogout}>Sair</p>
        </ReactModal>
	</Container>
  </>;
};

export default HeaderAuth;