import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import DesktopMenu from "../components/DesktopMenu";
import Store from "../stores";
import { initialState as appStore } from "../stores/AppStore";
import MenuMobile from "../components/MenuMobile";
import MobileNav from "../components/MobileNav";
import GlobalStyles from "../components/Styles/GlobalStyles";
import theme from "../components/Styles/Theme";
import { ThemeProvider } from "styled-components";
import "~/components/Styles/FontFace.css";
import scrollToWithCb from "../lib/Utils/scrollToWithCb";

// Build initial state
const initialState = {
  ...appStore,
};

const ThemeWrapper = (props) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: [0.42, 0, 0.58, 1],
  duration: 0.3,
};

const pageStyle = {
  position: "absolute",
};

const MyApp = ({ Component, pageProps, router }) => {
  const onExitComplete = () => {
    if (router.pathname === "/shop") {
      return;
    }
    resetScrollPosition();
  };

  const initRouterListeners = () => {
    const routes = [];

    router.events.on("routeChangeStart", (url) => {
      pushCurrentRouteInfo();
    });

    function pushCurrentRouteInfo() {
      const { scrollY } = window;
      routes.push({ pathname: router.pathname, scrollY });
    }
  };

  const resetScrollPosition = () => {
    scrollToWithCb({ top: 0, left: 0 });
  };

  const setiOSViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  const onBackNavigation = (e) => {
    // The popstate event is fired each time when the current history entry changes.
    // if (e?.state?.url === "/editorial/[slug]") {
    //   e.preventDefault();
    //   router.push(`${window.location.pathname}`);
    // }
  };

  useEffect(() => {
    initRouterListeners();
    resetScrollPosition();
  }, []);

  return (
    <ThemeWrapper>
      <Store.Provider initialState={initialState}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            variants={pageVariants}
            key={router?.asPath}
            transition={{ ...pageTransition }}
            initial="initial"
            animate="in"
            exit="out"
          >
            <Component {...pageProps} />
          </motion.div>
          <GlobalStyles />
          <DesktopMenu />
          <MenuMobile />
          <MobileNav />
        </AnimatePresence>
      </Store.Provider>
    </ThemeWrapper>
  );
};

export default MyApp;
