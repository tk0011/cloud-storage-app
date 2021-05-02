import React, {useState, useRef} from 'react';
import {Link , useHistory} from 'react-router-dom';
import {useAuth} from '../Contexts/AuthContext'
import { motion } from 'framer-motion';

const SignIn = () => {
   const emailRef = useRef()
    const passRef = useRef()

    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    const handleSubmit = async (e) => {
     e.preventDefault();

    try {
        setError('')
        setLoading(true)
        await login(emailRef.current.value, passRef.current.value)
        history.push('/')
    } catch {
        setError('Login failed. Please try again.')
    }
        setLoading(false)
    }

    return (
        <>
     
    <div className="container">
 
       <div className="auth-wrap">
            <motion.div initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 200, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg_score">
           <svg width="500" height="472" viewBox="0 0 634 472" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M423.888 364.123C457.427 368.213 486.202 388.896 509.883 391.729C536.201 394.878 576.004 377.586 616.593 397.938C627.04 403.177 635.618 409.472 632.422 417.296C626.852 430.931 615.13 436.273 589.453 439.978L586.714 440.357C566.864 442.997 545.53 443.636 491.447 443.993L472.967 444.133C407.04 444.707 368.915 447.794 319.545 451.738L314.512 452.146C223.598 459.627 151.028 458.428 96.8028 450.136L95.1652 449.882C51.355 443.02 25.0155 431.669 12.158 418.79C4.58881 411.209 0.22876 404.14 0.00372314 396.584C-0.221313 389.028 10.9423 380.722 17.2982 377.586C35.0035 368.85 40.7806 365.682 74.8188 361.209C89.4744 359.283 111.431 359.437 136.811 358.58C227.858 355.506 368.512 357.371 423.888 364.123Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M450.491 380.601C398.878 497.422 212.099 493.659 82.1359 413.925C57.3156 398.697 -28.0031 326.924 55.9706 285.014C139.944 243.103 113.047 178.728 180.817 101.947C259.189 13.1527 405.139 -32.3889 507.784 87.0796C768.672 390.726 467.87 341.263 450.491 380.601Z" fill="#FFB61D" fill-opacity="0.8"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M105.458 70.8269C100.805 63.3501 96.1418 60.4812 91.555 62.9628C87.6721 65.0636 87.0263 70.6748 89.0923 79.6517L87.8541 80.3193C86.1527 81.2368 85.5172 83.3598 86.4347 85.0612C86.514 85.2083 86.6038 85.3496 86.7034 85.4839L87.3669 86.3718C97.0533 99.2212 104.729 104.484 110.717 101.59C115.751 99.1575 116.601 88.7967 114.011 70.0481C113.83 68.7351 112.66 67.8019 111.356 67.8965L111.193 67.9137C110.897 67.9545 110.611 68.048 110.348 68.1897L105.458 70.8269ZM91.7235 77.6391L102.523 71.7967L102.497 71.757C98.7836 65.9974 95.6374 64.165 92.9826 65.6014L92.8607 65.6715C90.9004 66.868 90.3571 70.6268 91.6056 77.0513L91.7235 77.6391ZM111.136 71.173L89.278 82.9599C89.035 83.091 88.9442 83.3943 89.0752 83.6373C89.0866 83.6583 89.0994 83.6785 89.1136 83.6977L89.7575 84.5591C98.6112 96.3032 105.27 100.89 109.412 98.8888C112.559 97.3681 113.385 88.1319 111.195 71.6097L111.136 71.173ZM106.67 90.0715C107.184 89.5329 107.5 88.8033 107.5 88C107.5 86.3431 106.157 85 104.5 85C102.843 85 101.5 86.3431 101.5 88C101.5 89.6569 102.843 91 104.5 91C104.63 91 104.759 90.9917 104.885 90.9755L106.59 94.1062L106.652 94.2053C106.941 94.6145 107.496 94.7513 107.947 94.5059C108.432 94.2417 108.611 93.6344 108.347 93.1494L106.67 90.0715Z" fill="#FFB61D"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M423.888 364.123C457.427 368.213 486.202 388.896 509.883 391.729C536.201 394.878 576.004 377.586 616.593 397.938C627.04 403.177 635.618 409.472 632.422 417.296C626.852 430.931 615.13 436.273 589.453 439.978L586.714 440.357C566.864 442.997 545.53 443.636 491.447 443.993L472.967 444.133C407.04 444.707 368.915 447.794 319.545 451.738L314.512 452.146C223.598 459.627 151.028 458.428 96.8028 450.136L95.1652 449.882C51.355 443.02 25.0155 431.669 12.158 418.79C4.58881 411.209 0.22876 404.14 0.00372314 396.584C-0.221313 389.028 10.9423 380.722 17.2982 377.586C35.0035 368.85 40.7806 365.682 74.8188 361.209C89.4744 359.283 111.431 359.437 136.811 358.58C227.858 355.506 368.512 357.371 423.888 364.123ZM74.0673 367.538L71.8366 367.835C40.1167 372.136 19.8397 379.962 10.2342 387.764L9.6347 388.265C2.25903 394.621 1.56952 401.766 12.1714 412.329C23.7637 423.878 53.3297 436.908 95.9609 443.55C149.332 451.866 221.086 454.281 311.198 447.049L320.644 446.288C372.668 442.198 412.582 440.021 486.454 439.502L506.846 439.35C550.826 438.952 569.519 438.165 587.564 435.657L589.28 435.41C668.966 419.823 611.468 391.856 578.48 391.729C550.228 391.62 516.296 399.567 506.846 396.593C477.062 387.218 461.769 372.864 423.888 368.271L412.873 366.951L403.47 366.507C249.359 359.348 139.529 358.982 74.0673 367.538Z" fill="#00160A"/>
                  <path d="M173.877 5.37786C173.33 5.36024 172.782 5.36084 172.235 5.37966C158.749 5.8434 148.163 17.0433 148.407 30.4927L148.418 30.9009L148.584 35.9405C149.057 51.0778 149.318 66.1553 149.365 81.1729L149.447 127.38C149.465 144.011 149.455 159.02 149.406 173.719L149.339 189.307C149.077 238.934 148.37 273.764 147.058 288.925L146.805 291.76C145.221 310.289 144.893 336.902 145.832 371.537C145.843 371.938 145.863 372.338 145.893 372.737C146.931 386.78 159.043 397.357 173.055 396.549L173.48 396.521L178.137 396.183C221.663 393.077 265.19 391.524 308.717 391.524C351.321 391.524 394.252 393.012 437.51 395.987C438.761 396.073 440.017 396.081 441.269 396.01C457.67 395.082 470.252 381.166 469.592 364.808L469.568 364.311L469.24 358.412C466.337 305.267 464.833 252.123 464.73 198.978L464.724 193.073C464.724 154.338 466.538 101.215 470.164 33.6794C470.205 32.9228 470.213 32.1648 470.19 31.4075C469.734 16.7474 457.598 5.20111 442.987 5.41831L442.544 5.4285L420.428 6.09903C370.183 7.581 333.597 8.35537 310.647 8.42198L306.713 8.42638L302.666 8.41589C279.238 8.31528 242.97 7.51183 193.84 6.0057L173.877 5.37786Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M440.83 4.0001C439.058 4.97078 436.724 5.65358 433.826 6.04755C441.285 6.7101 447.149 6.55551 451.419 5.58424L450.495 5.46996C447.489 5.09027 444.267 4.60031 440.83 4.0001Z" fill="#E7EAEE"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M160.304 361.619L160.512 361.626C161.801 361.716 162.71 362.722 162.591 363.834C162.456 365.106 161.096 366.34 159.612 366.442C158.433 366.523 157.613 365.615 157.744 364.206C157.881 362.729 159.039 361.624 160.304 361.619Z" fill="#E7EAEE"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M183.91 380.933L184.117 380.941C185.406 381.03 186.315 382.037 186.197 383.148C186.061 384.42 184.702 385.654 183.218 385.756C182.038 385.837 181.219 384.93 181.35 383.521C181.487 382.043 182.645 380.938 183.91 380.933Z" fill="#E7EAEE"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M308.978 379.663C257.766 390.966 353.923 388.969 391.434 386.493C411.849 385.146 428.15 395.344 437.51 395.987C438.761 396.073 440.017 396.081 441.269 396.01C457.67 395.082 470.252 381.166 469.592 364.808L469.568 364.311L469.24 358.412C466.337 305.267 464.833 252.123 464.73 198.978L464.724 193.073C464.724 154.338 466.538 101.215 470.164 33.6794C470.205 32.9228 470.214 32.1648 470.19 31.4075C469.734 16.7475 441.642 350.384 308.978 379.663Z" fill="#E7EAEE"/>
                  <path d="M460.869 366.001L461.05 366.008C461.983 366.083 462.747 367.055 462.637 368.242C462.515 369.555 461.382 370.736 460.251 370.826C459.457 370.888 458.786 370.034 458.904 368.567C459.026 367.065 459.966 366.024 460.869 366.001Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M460.547 374.569C457.214 374.833 454.871 371.852 455.161 368.264C455.443 364.777 458.098 362.009 461.288 362.261C464.425 362.509 466.675 365.371 466.376 368.589C466.089 371.679 463.544 374.333 460.547 374.569ZM461.05 366.008L460.869 366.001C459.967 366.024 459.026 367.065 458.904 368.567C458.786 370.034 459.457 370.888 460.251 370.826C461.382 370.736 462.515 369.555 462.637 368.242C462.747 367.055 461.983 366.083 461.05 366.008Z" fill="white"/>
                  <path d="M429.149 27.0222C441.001 27.0222 450.609 36.6303 450.609 48.4825C450.609 48.9261 450.596 49.3696 450.568 49.8124L450.253 55.0697C449.677 65.048 449.101 76.8951 448.528 90.611L448.44 92.807C447.039 129.704 446.994 216.993 448.307 354.674C448.42 366.526 438.904 376.225 427.053 376.338C426.764 376.341 426.475 376.338 426.186 376.329L190.743 369.065C179.842 368.729 170.926 360.269 170.019 349.4L169.82 346.946C166.719 307.862 166.534 257.956 169.266 197.229L169.666 188.521C171.061 156.564 171.171 110.022 169.995 48.8954C169.769 37.1688 178.993 27.4584 190.669 27.0364L191.245 27.0232L429.149 27.0222Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M270.853 280.102C281.254 280.54 291.936 278.695 301.199 274.169C312.8 268.5 321.53 258.99 326.362 245.353C332.727 227.391 330.389 207.969 321.239 190.875C313.096 175.66 300.292 164.081 288.49 161.218C288.49 161.218 321.239 207.286 316.548 232.47C309.374 270.976 270.853 280.102 270.853 280.102Z" fill="#E7EAEE"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M278.417 226C283.479 228.1 285.025 232.001 283.053 237.705L282.94 238.024C270.121 273.221 255.005 273.542 267.94 238.024C269.507 233.721 269.119 230.42 266.774 228.121C270.917 227.28 274.798 226.573 278.417 226Z" fill="#E7EAEE"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M198.13 184.857C201.446 175.003 206.289 167.595 215.341 161.738L216.491 161.009C218.444 159.783 220.851 158.395 222.809 159.343C225.297 160.548 228.899 164.938 226.708 166.662C225.221 167.831 219.103 169.074 214.492 173.114C209.047 177.884 205.129 185.569 205.129 187.451C205.129 193.591 196.171 190.676 198.13 184.857Z" fill="#E7EAEE"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M187.873 44.402C176.487 75.6646 176.565 81.8676 175.882 76.4791C173.672 59.0524 172.005 47.6006 174.631 40.6443C177.955 31.8374 186.287 30.1051 188.433 31.1272C192.97 33.2883 187.873 44.402 187.873 44.402Z" fill="#E7EAEE"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M375.197 205.067L371.409 204.951C366.915 204.837 363.676 204.864 360.958 205.076C358.776 205.247 357.147 205.544 356.225 205.836L356.042 205.897L356.024 205.983C355.922 206.493 355.849 207.175 355.817 208L355.808 208.315C355.747 210.79 356.046 214.097 356.64 217.789C357.128 220.817 357.793 223.962 358.488 226.613L358.662 227.265C358.931 228.254 359.191 229.114 359.419 229.784L359.501 230.022L359.6 230.06C360.996 230.556 363.77 230.614 369.12 230.22L372.754 229.936C375.202 229.756 376.985 229.679 378.746 229.701L395.823 230.058C398.212 230.103 400.37 230.138 402.485 230.166L406.321 230.209C415.901 230.767 426.43 230.348 427.739 227.964C431.734 220.691 433.618 205.712 431.734 205.612C428.345 205.432 424.243 205.219 422.294 205.245L417.795 205.327L413.714 205.359C411.851 205.37 409.908 205.376 407.822 205.378L384.418 205.324C382.897 205.313 381.406 205.276 378.721 205.188L375.197 205.067Z" fill="#E7EAEE"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M195.743 0.696308L174.049 0.0155578C173.383 -0.00589202 172.716 -0.0051617 172.05 0.0177475C155.467 0.587998 142.485 14.4937 143.056 31.077L143.221 36.1083C143.415 42.3215 143.711 48.5245 144.006 54.7173C144.508 65.2331 145.008 75.7195 145.008 86.1765L145.077 124.103C145.144 176.994 144.984 264.101 142.635 289.331L142.458 291.311C140.931 309.188 139.559 334.339 140.343 366.764L140.469 371.683C140.482 372.167 140.506 372.65 140.542 373.133C141.809 390.272 156.729 403.139 173.868 401.872L178.518 401.535L179.289 401.48C179.444 401.739 179.601 401.999 179.757 402.255C180.51 403.499 181.214 404.66 181.377 405.231C181.79 406.668 181.833 408.297 181.595 411.982L181.354 415.436L181.288 416.558C180.936 423.444 181.732 427.54 185.091 430.625C189.411 434.592 193.988 434.171 203.365 433.309L203.786 433.27L206.2 433.036C208.99 432.767 212.127 432.985 214.265 433.133L214.266 433.133C214.882 433.176 215.414 433.213 215.832 433.231L216.621 433.27C222.002 433.485 222.856 431.714 223.327 427.336C223.587 424.923 223.249 423.025 221.831 418.127L220.771 414.517L220.418 413.262C218.763 407.143 218.914 404.089 221.071 402.611C221.594 402.253 223.781 401.603 226.302 400.853C228.896 400.081 231.845 399.204 233.702 398.431C258.707 397.403 283.712 396.889 308.717 396.889C334.99 396.889 361.388 397.457 387.912 398.592C387.736 398.879 387.704 399.292 387.891 399.87C388.101 400.522 388.899 400.973 389.919 401.55C392.623 403.079 396.884 405.489 395.893 414.847L395.897 415.232C396.046 422.609 400.518 426.936 407.711 428.405C412.521 429.387 417.992 429.091 423.951 428.057C426.901 427.546 428.801 425.701 429.708 422.89C430.209 421.337 430.388 419.942 430.506 417.166C430.506 417.166 429.194 402.738 436.49 401.295C436.707 401.31 436.924 401.325 437.142 401.34C437.986 401.398 438.833 401.426 439.679 401.423C439.793 401.45 439.908 401.479 440.024 401.51C440.374 401.605 440.708 401.551 441.008 401.394C441.196 401.387 441.384 401.377 441.572 401.367C461.097 400.262 476.029 383.538 474.925 364.014L474.597 358.119C471.591 303.104 470.089 248.088 470.089 193.073C470.089 155.609 471.793 104.584 475.2 39.9984L475.521 33.967C475.57 33.0591 475.58 32.1496 475.552 31.2408C475 13.4711 460.147 -0.486382 442.377 0.0660013L431.114 0.411874C375.304 2.10398 335.146 2.98566 310.64 3.05691L306.717 3.0613C283.838 3.04361 246.846 2.25528 195.743 0.696308ZM429.166 400.808C416.765 400.007 404.392 399.329 392.046 398.773C397.957 401.643 400.065 407 400.182 414.411L400.185 414.847C400.185 419.642 403.915 422.772 408.932 423.796C409.457 423.903 409.996 424.02 410.547 424.14C414.012 424.891 417.974 425.751 422.367 425.03L423.034 424.917C426.073 423.796 426.073 412.879 426.073 412.879C426.106 411.991 426.137 411.412 426.189 410.708L426.256 409.916C426.635 405.942 427.465 402.973 429.166 400.808ZM186.534 403.751C186.243 402.735 185.827 401.836 185.29 401.064C195.816 400.352 206.343 399.731 216.87 399.201C215.225 401.033 215.071 403.509 215.01 406.466C214.958 409.014 215.473 411.724 216.556 415.542L216.621 415.77L217.612 419.144C218.826 423.311 219.19 425.054 219.088 426.514L219.066 426.762C218.92 428.117 217.18 429.646 214.239 429.475L213.713 429.448C212.452 429.257 200.03 429.475 200.03 429.475C194.295 430.056 191.533 429.257 188.719 426.673C186.83 424.938 186.324 421.858 186.696 415.962L186.928 412.652C187.22 408.325 187.195 406.299 186.65 404.177L186.534 403.751ZM172.234 5.37967C172.782 5.36085 173.329 5.36025 173.877 5.37787L193.839 6.00571C242.97 7.51183 279.238 8.31528 302.666 8.41589L306.713 8.42639L310.646 8.42199C333.597 8.35538 370.183 7.581 420.428 6.09903L442.543 5.42851L442.987 5.41832C457.598 5.20112 469.734 16.7475 470.19 31.4075C470.213 32.1648 470.205 32.9228 470.164 33.6794C466.538 101.215 464.724 154.338 464.724 193.073L464.729 198.978C464.833 252.123 466.337 305.267 469.24 358.412L469.568 364.311L469.592 364.808C470.252 381.166 457.67 395.082 441.269 396.01C440.016 396.081 438.761 396.073 437.51 395.987C394.252 393.012 351.321 391.524 308.717 391.524C265.189 391.524 221.663 393.077 178.136 396.183L173.48 396.521L173.055 396.549C159.043 397.357 146.93 386.78 145.893 372.737C145.863 372.338 145.843 371.938 145.832 371.537C144.893 336.902 145.221 310.289 146.804 291.76L147.058 288.925C148.37 273.764 149.077 238.934 149.339 189.307L149.406 173.719C149.454 159.02 149.465 144.011 149.446 127.38L149.365 81.1729C149.318 66.1553 149.057 51.0778 148.583 35.9405L148.418 30.9009L148.407 30.4927C148.163 17.0433 158.749 5.8434 172.234 5.37967ZM450.609 48.4825C450.609 36.6303 441.001 27.0222 429.149 27.0222L191.245 27.0232L190.669 27.0364C178.993 27.4584 169.769 37.1688 169.995 48.8954C171.171 110.022 171.061 156.564 169.666 188.521L169.266 197.229C166.534 257.956 166.719 307.862 169.819 346.946L170.019 349.4C170.926 360.269 179.842 368.729 190.743 369.065L426.186 376.329C426.475 376.338 426.764 376.341 427.052 376.338C438.904 376.225 448.42 366.526 448.307 354.674C446.994 216.993 447.038 129.704 448.44 92.807L448.528 90.611C449.101 76.8951 449.677 65.048 450.253 55.0697L450.568 49.8124C450.596 49.3696 450.609 48.9261 450.609 48.4825ZM191.451 32.3873H429.149C438.038 32.3873 445.244 39.5934 445.244 48.4825C445.244 48.8152 445.234 49.1479 445.213 49.4799C444.651 58.5297 444.092 69.3332 443.533 81.8926L443.167 90.3868C441.75 124.283 441.612 205.454 442.752 334.03L442.942 354.725C443.027 363.614 435.89 370.889 427.001 370.973C426.785 370.975 426.568 370.973 426.352 370.966L190.909 363.703L190.554 363.688C182.54 363.266 176.036 356.987 175.366 348.954C172.062 309.364 171.841 258.218 174.713 195.55L174.982 189.75C176.336 159.596 176.529 116.353 175.563 59.9875L175.359 48.7922C175.188 39.9046 182.254 32.5613 191.141 32.3903C191.245 32.3883 191.348 32.3873 191.451 32.3873ZM183.228 15.9332C183.567 19.5806 180.924 22.5077 177.362 22.2626C174.106 22.0385 171.241 19.4379 170.907 16.306L170.887 16.0771C170.68 12.961 173.067 10.312 176.27 9.97228L176.512 9.95116C179.927 9.71611 182.901 12.4156 183.228 15.9332ZM176.928 13.6927L176.721 13.7006C175.432 13.7899 174.523 14.7966 174.641 15.9077C174.777 17.1798 176.136 18.4138 177.62 18.5159C178.8 18.5971 179.619 17.6896 179.488 16.2806C179.351 14.8032 178.193 13.6981 176.928 13.6927ZM157.941 44.3809C154.228 44.7103 151.726 41.1384 152.035 36.8547C152.338 32.6561 155.221 29.2817 158.791 29.5984L159.022 29.6236C162.301 30.0502 164.566 33.2759 164.381 36.8916L164.364 37.1445C164.058 40.8405 161.286 44.0841 157.941 44.3809ZM158.516 33.3434L158.333 33.3345C157.195 33.3485 155.942 34.8874 155.781 37.1246C155.62 39.3597 156.581 40.7313 157.609 40.6401C159.004 40.5163 160.457 38.8164 160.621 36.8349C160.776 34.9589 159.72 33.4511 158.516 33.3434ZM435.939 15.9332C435.6 19.5806 438.243 22.5077 441.805 22.2626C445.061 22.0385 447.926 19.4379 448.26 16.306L448.28 16.0771C448.487 12.961 446.1 10.312 442.897 9.97228L442.655 9.95116C439.24 9.71611 436.266 12.4156 435.939 15.9332ZM442.239 13.6927L442.446 13.7006C443.735 13.7899 444.644 14.7966 444.526 15.9077C444.39 17.1798 443.031 18.4138 441.547 18.5159C440.367 18.5971 439.548 17.6896 439.679 16.2806C439.816 14.8032 440.974 13.6981 442.239 13.6927ZM455.936 38.2422C453.943 35.2806 455.157 31.5281 458.485 29.9979C461.695 28.5221 465.519 29.7476 467.024 32.8231L467.126 33.043C468.433 35.9867 467.333 39.3786 464.531 40.7573L464.323 40.8547C461.443 42.1313 457.759 40.9507 455.936 38.2422ZM463.672 34.517L463.575 34.3332C462.938 33.2403 461.402 32.7902 460.054 33.41C458.768 34.0012 458.392 35.1646 459.052 36.1456C459.883 37.3797 461.631 37.94 462.8 37.4214C463.822 36.9685 464.239 35.678 463.672 34.517ZM155.289 359.671C152.685 362.247 152.828 366.188 155.714 368.289C158.353 370.211 162.219 370.06 164.488 367.876L164.65 367.713C166.812 365.459 166.686 361.896 164.45 359.577L164.279 359.405C161.813 357.03 157.8 357.186 155.289 359.671ZM161.555 362.004L161.709 362.143C162.639 363.04 162.688 364.396 161.883 365.171C160.961 366.058 159.127 366.129 157.924 365.254C156.969 364.558 156.924 363.336 157.93 362.34C158.985 361.297 160.582 361.195 161.555 362.004ZM179.32 387.604C176.434 385.502 176.291 381.561 178.895 378.985C181.407 376.5 185.42 376.344 187.885 378.719L188.057 378.891C190.292 381.21 190.418 384.774 188.256 387.028L188.094 387.19C185.825 389.375 181.959 389.526 179.32 387.604ZM185.315 381.457L185.161 381.318C184.189 380.509 182.591 380.611 181.537 381.655C180.531 382.65 180.575 383.872 181.531 384.568C182.733 385.444 184.568 385.372 185.489 384.485C186.294 383.71 186.245 382.354 185.315 381.457ZM443.514 380.232C440.524 383.247 440.444 387.683 443.629 389.964C446.546 392.053 450.913 391.641 453.526 389.069C456.234 386.404 456.311 382.115 453.647 379.506C450.951 376.867 446.428 377.293 443.514 380.232ZM450.901 382.082L451.054 382.223C452.159 383.305 452.125 385.179 450.891 386.393C449.563 387.7 447.226 387.921 445.816 386.91C444.673 386.092 444.705 384.365 446.181 382.876C447.679 381.365 449.763 381.121 450.901 382.082ZM460.547 374.57C457.214 374.833 454.871 371.852 455.161 368.264C455.443 364.777 458.098 362.009 461.288 362.261C464.425 362.509 466.675 365.371 466.376 368.589C466.089 371.679 463.544 374.333 460.547 374.57ZM461.05 366.008L460.869 366.001C459.966 366.024 459.026 367.065 458.904 368.567C458.786 370.034 459.457 370.888 460.251 370.826C461.382 370.736 462.515 369.555 462.637 368.242C462.747 367.055 461.983 366.083 461.05 366.008Z" fill="#00160A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M178.896 378.985C176.292 381.561 176.435 385.502 179.32 387.604C181.959 389.526 185.825 389.375 188.094 387.19L188.257 387.028C190.418 384.774 190.292 381.21 188.057 378.891L187.886 378.719C185.42 376.344 181.407 376.5 178.896 378.985ZM185.161 381.318L185.316 381.457C186.246 382.354 186.295 383.71 185.49 384.485C184.568 385.372 182.734 385.444 181.531 384.568C180.575 383.872 180.531 382.65 181.537 381.655C182.592 380.611 184.189 380.509 185.161 381.318Z" fill="#00160A"/>
                  <path d="M450.901 382.082L451.054 382.223C452.158 383.305 452.124 385.179 450.891 386.393C449.562 387.7 447.226 387.921 445.815 386.911C444.673 386.092 444.704 384.365 446.18 382.876C447.679 381.365 449.762 381.121 450.901 382.082Z" fill="white"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M214.082 151.793C212.843 152.223 211.726 152.807 210.345 153.657L209.285 154.322L208.76 154.657C200.758 159.822 195.416 166.245 191.615 174.943L191.412 175.414L191.26 175.368C190.251 175.072 189.337 174.927 188.359 175.008C186.275 175.181 184.333 176.43 183.639 178.758C182.555 182.393 183.002 186.55 184.409 190.806L184.673 191.585C186.046 195.53 187.565 198.207 190.091 198.989C193.449 200.028 205.051 195.429 209.097 191.256C211.982 188.279 210.827 184.638 208.08 182.537L207.828 182.35L207.563 182.167L207.261 181.972L207.463 181.612C207.603 181.364 207.75 181.113 207.903 180.859C209.544 178.139 211.595 175.567 213.673 173.746C214.474 173.045 215.399 172.402 216.454 171.803C218.086 170.875 224.597 168.319 225.693 167.457C229.213 164.689 228.806 160.679 226.579 157.203C225.195 155.042 223.018 153.016 220.914 151.997C218.704 150.927 216.391 150.991 214.082 151.793ZM218.809 156.343C221.297 157.548 224.899 161.938 222.708 163.662C221.222 164.831 215.104 166.074 210.492 170.114C205.047 174.884 201.129 182.569 201.129 184.451L201.75 184.684C205.145 185.991 206.438 187.061 205.63 187.895C202.029 191.609 192.243 194.6 191.519 194.376C190.806 194.156 186.583 185.781 188.266 180.137C188.491 179.383 190.445 179.956 194.13 181.857C197.446 172.003 202.289 164.595 211.341 158.738L212.491 158.009C214.444 156.783 216.851 155.395 218.809 156.343Z" fill="#00160A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M221.407 262.908C201.531 241.186 200.38 204.131 221.853 180.269C235.193 165.443 266.549 155.894 288.49 161.218C300.292 164.081 313.096 175.66 321.239 190.875C330.389 207.969 332.726 227.391 326.362 245.353C321.53 258.99 312.8 268.5 301.199 274.169C291.936 278.695 281.254 280.54 270.853 280.102C252.082 279.312 228.741 270.923 221.407 262.908ZM316.509 193.407C309.03 179.434 297.376 168.894 287.225 166.431L286.621 166.29C266.607 161.75 237.736 170.638 225.841 183.857C206.259 205.619 207.313 239.558 225.365 259.286C231.595 266.095 253.607 274.006 271.078 274.741C280.642 275.144 290.448 273.451 298.843 269.349C309.206 264.285 316.952 255.847 321.305 243.561C327.134 227.111 324.982 209.238 316.509 193.407ZM306.174 244.811C318.047 223.968 301.952 178.964 279.473 175.208C258.342 171.678 250.332 176.804 241.219 184.706L239.457 186.252C221.622 202.02 221.622 235.895 239.046 251.611C243.425 255.561 262.69 265.693 277.473 262.593C287.275 260.538 300.916 254.041 306.174 244.811ZM256.561 181.088C257.68 180.686 258.86 180.356 260.117 180.098C259.947 180.489 259.803 180.903 259.684 181.341C259.018 183.792 259.086 185.888 259.805 190.99L260.296 194.371C260.338 194.669 260.375 194.942 260.412 195.222L260.52 196.082C261.285 202.542 260.591 205.911 257.703 207.77C255.06 209.47 252.46 210.112 246.523 210.803L244.3 211.055C241.561 211.371 240.122 211.589 238.392 211.98L237.609 212.137C235.211 212.642 233.221 213.268 231.676 214.056C232.695 204.828 236.473 196.051 243.011 190.271C249.177 184.819 252.288 182.62 256.561 181.088ZM278.589 180.5C277.721 180.355 276.876 180.225 276.053 180.11C276.225 180.546 276.372 181.01 276.492 181.5C276.994 183.547 277.08 185.363 276.959 189.503L276.9 191.288C276.838 193.007 276.807 194.03 276.799 195.012L276.798 196.19C276.849 201.426 277.669 204.907 279.683 207.264L279.907 207.515L279.996 207.553C280.121 207.603 280.278 207.66 280.467 207.723L280.665 207.787C281.126 207.934 281.705 208.098 282.445 208.293L283.684 208.609L288.972 209.904C290.01 210.162 290.934 210.397 291.819 210.631L293.274 211.023C297.645 212.227 300.996 213.4 303.434 214.709C299.793 198.412 289.771 182.368 278.589 180.5ZM304.019 226.696C304.321 226.504 304.606 226.308 304.876 226.11C305.007 232.189 303.988 237.81 301.512 242.156C297.958 248.396 288.084 254.338 278.443 256.854C278.687 256.239 278.884 255.571 279.037 254.855C279.505 252.654 279.58 250.134 279.396 246.564L279.28 244.644L279.105 242.117C278.774 237.071 278.854 234.959 279.294 234.453C281.273 232.178 284.015 231.307 290.994 230.306L292.612 230.075C298.446 229.223 301.182 228.504 304.019 226.696ZM263.012 254.241C263.086 255.146 263.387 256.07 263.874 256.942C261.4 256.419 258.825 255.668 256.202 254.708C250.334 252.56 244.644 249.435 242.64 247.628C236.276 241.888 232.613 233.224 231.651 224.101C233.299 224.861 235.479 225.503 238.186 226.144L238.603 226.241C239.695 226.495 240.813 226.731 242.131 226.991L245.899 227.723C254.334 229.456 258.689 231.465 260.679 234.148L260.878 234.428C262.197 236.35 262.561 238.525 262.667 244.175L262.727 248.198C262.774 250.608 262.848 252.206 263.012 254.241ZM269.357 180.326L269.599 180.347C271.876 180.619 272.358 182.731 272.089 190.697L271.998 193.458C271.976 194.291 271.967 194.962 271.967 195.696C271.97 200.691 272.568 204.571 274.174 207.678C273.875 207.519 273.532 207.429 273.169 207.429L272.804 207.433L272.713 207.436L272.672 207.419C272.056 207.19 271.382 207.263 270.838 207.583L270.782 207.617L270.593 207.648C265.914 208.428 261.262 211.223 258.769 214.926C256.094 218.898 256.226 223.234 259.278 226.947C256.374 225.414 252.521 224.185 247.436 223.111L245.795 222.781C244.829 222.594 243.625 222.363 243.625 222.363L242.655 222.172C241.718 221.985 240.888 221.809 240.091 221.629L239.695 221.538C237.273 220.975 235.361 220.399 234.024 219.796L233.811 219.698C233.4 219.502 233.073 219.314 232.841 219.146L232.81 219.122L232.869 219.061C233.035 218.897 233.285 218.711 233.627 218.513C234.799 217.836 236.731 217.216 239.381 216.705L240.051 216.561C241.23 216.318 242.385 216.145 244.189 215.93L247.116 215.596C253.774 214.82 256.857 214.055 260.316 211.83C265.359 208.585 266.321 203.51 265.258 195.046L265.141 194.153C265.081 193.715 265.016 193.259 264.93 192.676L264.597 190.389C264 186.137 263.914 184.312 264.306 182.75L264.343 182.608C264.822 180.848 266.042 180.119 269.357 180.326ZM264.37 231.025C264.433 231.107 264.496 231.189 264.557 231.271C266.838 234.348 267.361 237.065 267.494 244.003L267.547 247.668C267.587 249.962 267.647 251.473 267.777 253.223L267.825 253.852C267.925 255.092 270.042 257.064 272.38 256.618C274.202 256.27 274.907 253.286 274.564 246.644L274.517 245.812L274.25 241.914C273.829 235.533 273.962 233.413 275.419 231.564C271.927 232.878 267.866 232.815 264.37 231.025ZM281.052 227.534C283.217 226.715 285.974 226.161 289.801 225.6L291.877 225.303C296.725 224.594 299.07 224.015 301.056 222.849L301.425 222.623C303.672 221.192 303.888 220.907 302.888 220.1L302.565 219.849C300.797 218.518 297.384 217.19 292.47 215.811L291.432 215.525C290.311 215.222 289.159 214.926 287.802 214.589L282.155 213.204C281.088 212.935 280.235 212.711 279.541 212.506C283.905 217.12 284.627 222.315 281.628 226.752L281.458 226.996C281.328 227.18 281.192 227.359 281.052 227.534ZM271.454 211.856L271.759 211.813L271.975 211.943C278.994 216.21 280.556 220.86 277.961 224.508C275.379 228.137 269.709 229.391 265.64 226.813C260.923 223.824 260.14 220.574 262.329 217.323C264.178 214.578 267.874 212.406 271.454 211.856Z" fill="#00160A"/>
                  <path d="M342.214 200.186C342.412 199.461 342.605 199.256 342.605 199.25C343.289 198.755 344.715 198.251 347.082 197.916C349.374 197.591 352.175 197.47 355.26 197.464C358.333 197.458 361.601 197.565 364.819 197.676C365.008 197.683 365.197 197.689 365.385 197.696C368.387 197.8 371.342 197.903 373.956 197.906C377.037 197.909 380.168 197.92 383.321 197.931C391.03 197.957 398.875 197.984 406.462 197.906C406.793 197.902 407.271 197.892 407.868 197.88C410.288 197.829 414.662 197.737 419.122 197.881C421.898 197.97 424.623 198.149 426.856 198.472C427.973 198.634 428.912 198.824 429.646 199.037C430.425 199.264 430.776 199.462 430.872 199.535C431.042 199.664 431.396 200.063 431.775 201.003C432.139 201.906 432.444 203.108 432.655 204.561C433.077 207.466 433.082 211.069 432.666 214.619C432.249 218.184 431.429 221.509 430.317 223.914C429.113 226.518 428.006 227.156 427.48 227.213C414.13 228.664 391.572 228.169 373.61 227.776C371.597 227.732 369.641 227.689 367.762 227.65C365.508 227.604 363.151 227.754 360.89 227.93C360.342 227.973 359.801 228.016 359.268 228.06C357.558 228.198 355.921 228.331 354.34 228.398C352.27 228.485 350.468 228.449 348.965 228.198C347.642 227.976 346.703 227.612 346.048 227.147C345.975 226.987 345.879 226.755 345.762 226.44C345.476 225.667 345.134 224.572 344.769 223.231C344.04 220.556 343.263 217.052 342.687 213.477C342.108 209.882 341.752 206.327 341.821 203.511C341.856 202.097 341.996 200.982 342.214 200.186ZM346.159 227.363C346.159 227.364 346.151 227.352 346.135 227.323C346.151 227.347 346.159 227.362 346.159 227.363Z" stroke="#421EB7" stroke-width="5.36509"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M373.899 195.743C376.994 195.746 380.133 195.757 383.291 195.768C389.785 195.79 396.361 195.812 402.801 195.772L406.375 195.743C406.682 195.74 407.136 195.73 407.711 195.718C413.085 195.605 428.946 195.27 432.434 197.917C438.14 202.248 435.868 229.514 427.71 230.4C414.171 231.871 391.418 231.371 373.507 230.978H373.507H373.507H373.507C371.486 230.933 369.526 230.89 367.648 230.852C365.04 230.798 362.233 231.025 359.462 231.25L359.462 231.25H359.462C353.246 231.754 347.209 232.243 343.998 229.514C342.341 228.106 335.96 201.308 340.93 197.628C344.728 194.816 355.618 195.194 365.403 195.534L365.403 195.534C367.832 195.618 370.193 195.7 372.361 195.731L372.365 195.728L372.367 195.731C372.89 195.738 373.401 195.742 373.899 195.743ZM367.356 200.968C367.884 200.986 368.366 201.001 368.811 201.015C369.172 203.237 369.213 207.141 368.954 212.893L368.763 217.05C368.593 220.935 368.532 223.579 368.643 225.508L367.381 225.482C365.621 225.459 363.837 225.537 361.389 225.717L357.756 226.001C352.406 226.395 349.631 226.337 348.235 225.841L348.136 225.803L348.054 225.565C347.826 224.895 347.567 224.035 347.297 223.046L347.123 222.394C346.429 219.743 345.763 216.598 345.276 213.57C344.681 209.877 344.382 206.571 344.443 204.096L344.453 203.781C344.485 202.956 344.558 202.274 344.66 201.764L344.678 201.678L344.86 201.617C345.782 201.325 347.412 201.027 349.594 200.857C352.311 200.645 355.55 200.618 360.044 200.732L363.833 200.848L367.356 200.968ZM384.458 225.839L374.086 225.622C374.03 225.014 373.99 224.266 373.976 223.401L373.973 223.215C373.956 221.856 373.983 220.558 374.078 218.278L374.38 211.572C374.563 206.965 374.569 203.621 374.264 201.108L396.458 201.159C397.646 201.158 398.788 201.155 399.895 201.152C399.556 207.827 400.096 219.502 400.79 226.023C398.918 226.02 396.974 226.009 394.957 225.99L391.12 225.947C389.006 225.919 386.847 225.884 384.458 225.839ZM406.24 226.005C414.485 225.936 421.104 225.669 426.235 225.159L426.715 225.109L426.78 225.042C427.053 224.732 427.373 224.234 427.7 223.566L427.823 223.308C428.786 221.224 429.549 218.188 429.942 214.826C430.332 211.5 430.328 208.13 429.941 205.467C429.762 204.238 429.511 203.23 429.227 202.525L429.147 202.335L429.087 202.21L428.873 202.143C428.298 201.973 427.51 201.81 426.546 201.666C424.644 201.383 422.196 201.194 419.332 201.093C416.669 201 413.962 200.986 410.93 201.026L406.43 201.108L405.152 201.118C405.11 201.843 405.079 202.706 405.067 203.673L405.064 203.987C405.043 206.602 405.136 209.897 405.322 213.545L405.36 214.279C405.514 217.141 405.718 220.098 405.935 222.698L406.067 224.212C406.126 224.86 406.184 225.461 406.24 226.005ZM382.613 210.17L383.102 210.871C383.661 211.658 384.188 212.355 384.691 212.97C384.016 214.44 383.662 216.091 383.551 218.216C383.511 218.989 384.105 219.648 384.878 219.689C385.65 219.729 386.31 219.135 386.35 218.362C386.414 217.138 386.564 216.128 386.831 215.232C388.382 216.589 389.74 217.093 391.167 217.119L391.443 217.119C392.217 217.119 392.844 216.492 392.844 215.718C392.844 214.992 392.293 214.396 391.586 214.324L391.443 214.317L391.208 214.317C390.293 214.296 389.372 213.91 388.116 212.644C388.525 212.073 389.018 211.505 389.607 210.9L391.11 209.413C391.66 208.869 391.663 207.981 391.119 207.432C390.574 206.882 389.686 206.878 389.137 207.423L387.878 208.662C387.267 209.274 386.73 209.862 386.261 210.451L385.752 209.76C385.488 209.396 385.213 209.004 384.924 208.583C384.485 207.945 383.613 207.783 382.975 208.221C382.337 208.659 382.175 209.532 382.613 210.17ZM420.879 208.835L420.892 207.98C420.899 207.206 420.277 206.574 419.503 206.567C418.729 206.561 418.096 207.183 418.09 207.957C418.083 208.808 418.061 209.571 418.025 210.253C417.307 210.027 416.533 209.84 415.684 209.675L413.948 209.351C413.188 209.207 412.454 209.706 412.31 210.466C412.166 211.227 412.665 211.96 413.425 212.104L415.503 212.497C416.33 212.669 417.055 212.863 417.714 213.109C417.381 214.861 416.833 215.695 416.086 216.224L415.891 216.356L415.776 216.442C415.231 216.896 415.107 217.699 415.513 218.301C415.946 218.943 416.817 219.112 417.458 218.679L417.687 218.525C418.856 217.705 419.7 216.528 420.227 214.535C420.949 215.129 421.638 215.883 422.376 216.862C422.841 217.48 423.72 217.604 424.338 217.138C424.956 216.672 425.08 215.794 424.614 215.176C423.334 213.476 422.117 212.305 420.735 211.463C420.808 210.673 420.856 209.8 420.879 208.835Z" fill="#00160A"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M359.74 208.716L359.52 209.543C359.264 210.473 359.007 211.308 358.745 212.058C359.881 213.208 360.779 214.639 361.61 216.598C361.912 217.311 361.58 218.133 360.868 218.436C360.155 218.738 359.332 218.405 359.03 217.693C358.551 216.564 358.065 215.666 357.508 214.916C356.515 216.721 355.411 217.659 354.078 218.172L353.819 218.267C353.092 218.531 352.288 218.156 352.023 217.429C351.775 216.747 352.089 215.998 352.729 215.689L352.861 215.633L353.082 215.553C353.935 215.22 354.668 214.543 355.415 212.923C354.835 212.526 354.178 212.162 353.418 211.795L351.497 210.911C350.794 210.587 350.487 209.755 350.811 209.052C351.135 208.349 351.967 208.042 352.67 208.366L354.277 209.1C355.06 209.466 355.766 209.835 356.407 210.228C356.607 209.574 356.813 208.84 357.026 208.016C357.219 207.266 357.984 206.815 358.733 207.009C359.482 207.202 359.933 207.967 359.74 208.716Z" fill="#64FCD9"/>
                  </svg>
    </motion.div>

     <motion.div initial={{ x: 200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 200, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="form-wrap">
           <h5>Sign In</h5>
            {error && <p style={{borderRadius:"3px", padding: '5px', marginBottom: "0px"}} className="red darken-1 center-align white-text">{error}</p>}
           <form className=" sign-up-form" onSubmit={handleSubmit}>
             
              <div className="input-field">
                <input id="email" type="email" className="validate" placeholder="Email"  ref={emailRef}  required/>
              </div>
              <div className="input-field">
                <input id="password" type="password" className="validate"  placeholder="Password" ref={passRef} required/>
              </div>
              <button disabled={loading} className="waves-effect waves-light btn grey darken-4"> Login</button>
              <p>Not a member yet? <Link to="/register">Register Now</Link></p>
          </form>
     </motion.div>
          </div>

</div>
        </>
    )
}

export default SignIn
