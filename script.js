"use strict";

const appIconShare = document.querySelector(".app-icon-share");
const modalIcons = document.querySelector(".modal-icons");
const overlay = document.querySelector(".overlay");
const appGroupTwo = document.querySelector(".app-group-two");
const appIconShareMobile = document.querySelector(".app-icon-share-mobile");
const appGroupFour = document.querySelector(".app-group-four");
const mobileModal = document.querySelector(".mobile-modal");

const remove = function () {
  modalIcons.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const add = function () {
  modalIcons.classList.add("hidden");
  overlay.classList.add("hidden");
};
appIconShare.addEventListener("click", remove);
overlay.addEventListener("click", add);

appIconShareMobile.addEventListener("click", function () {
  appGroupTwo.classList.add("hidden");
  appGroupFour.classList.add("hidden");

  const appMobile = `<div class="app-group-four-mobile app-mobile-hidden">
   <div class="app-icon-group-mobile">
              <div class="icons-mobile">
                <p class="icon-share-text-mobile">SHARE</p>
                <div class="icon-share-logos-mobile">
                  <a
                    href="https://www.facebook.com/"
                    class="facebook"
                    target="_blank"
                    ><i class="fa-brands fa-square-facebook icon-mobile"></i
                  ></a>
                  <a
                    href="https://x.com/?lang=en"
                    class="twitter"
                    target="_blank"
                    ><i class="fa-brands fa-twitter icon-mobile"></i
                  ></a>
                  <a
                    href="https://www.pinterest.com/"
                    class="pinterest"
                    target="_blank"
                    ><i class="fa-brands fa-pinterest icon-mobile"></i
                  ></a>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle cx="16" cy="16" r="16" fill="#6E8098" />
                <path
                  d="M24 15.495L17.7663 9.01392V12.8807H16.4409C12.3314 12.8807 9 16.0393 9 19.9358V21.9849L9.58868 21.3733C11.5901 19.2941 14.4221 18.1094 17.3912 18.1094H17.7663V21.9762L24 15.495Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
         </div>`;
  mobileModal.innerHTML = appMobile;
});
