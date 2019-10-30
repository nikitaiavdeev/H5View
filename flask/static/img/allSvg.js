document.getElementById('allSvgImages').innerHTML = `
<svg width="0px" height="0px"">
    <defs>
        <marker viewBox="-1 -1 10 10" refX="4" refY="8" id="fitArr" markerWidth="4" markerHeight="4" orient="auto">
            <g fill="none" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="#222732">
                <path d="M0 3l4-3 4 3M4 8V0" />
            </g>
        </marker>
        <marker viewBox="0 0 32 32" refX="16" refY="16" id="node" markerWidth="16" markerHeight="16">
            <circle cx="16" cy="16" r="4" fill="#fd7000" stroke="#222732" />
        </marker>
        <marker id="arr1" orient="auto" overflow="visible">
            <path fill="#1d3272" d="M5.77 0l-8.65 5V-5l8.65 5z" transform="scale(-.3)" />
        </marker>
        <marker id="arr2" orient="auto" overflow="visible">
            <path fill="#c61d1d" d="M5.77 0l-8.65 5V-5l8.65 5z" transform="scale(-.3)" />
        </marker>
        <linearGradient id="fringeGrad" x1="9" x2="91" y1="9" y2="91" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#00f" />
            <stop offset="1" stop-color="red" />
        </linearGradient>
    </defs>

    <symbol id="build_status" viewBox="0 0 120 20">
        <clipPath id="a">
            <rect width="120" height="20" rx="3" fill="#fff"/>
        </clipPath>
        <g clip-path="url(#a)">
            <path fill="#4C9A2A" d="M0 0h37v20H0z"/>
            <path fill="#6581d899" d="M37 0h83v20H37z"/>
        </g>
        <g fill="#ddd" text-anchor="middle" font-family="Arial" font-size="11">
            <text x="18.5" y="14">
                build
            </text>
            <text x="77.5" y="14">
                beta [v0.0.1]
            </text>
        </g>
    </symbol>

    <symbol id="openFile" viewBox="0 0 58 58">
        <path
            d="M46.324 52.5H1.565a1.564 1.564 0 0 1-1.51-1.973l10.166-27.871a1.564 1.564 0 0 1 1.51-1.156H56.49c1.03 0 1.51.984 1.51 1.973L47.834 51.344a1.564 1.564 0 0 1-1.51 1.156z"
            fill="#ff9c4d" />
        <path
            d="M50.268 12.5H25l-5-7H1.732C.776 5.5 0 6.275 0 7.232V49.96c.069.002.138.006.205.01L10.22 22.656a1.563 1.563 0 0 1 1.51-1.156H52v-7.268c0-.957-.776-1.732-1.732-1.732z"
            fill="#fd7000" />
    </symbol>

    <symbol id="import" viewBox="0 0 58 58">
        <rect width="58" height="44.677" y="10.568" ry="1.782" fill="#ff9c4d" />
        <path
            d="M1.93 2.755A1.93 1.93 0 0 0 0 4.685v7.665c0-.494.2-.938.521-1.26a1.773 1.773 0 0 1 1.26-.521h54.307c-.008 0-.013-.007-.018-.007H27.884L22.31 2.755z"
            fill="#fd7000" />
        <path
            d="M27.5 19.319l10-7.5a1.25 1.25 0 1 1 2 1v3.75h3.75c7.582 0 13.75 6.167 13.75 13.75a1.252 1.252 0 0 1-1.25 1.25 1.25 1.25 0 0 1-1.117-.69l-.296-.588a11.188 11.188 0 0 0-10.062-6.222H39.5v3.75a1.252 1.252 0 0 1-2 1l-10-7.5a1.25 1.25 0 0 1 0-2z"
            fill="#1d3272" />
    </symbol>

    <symbol id="import_bdf" viewBox="0 0 56 56">
        <path fill="#ff9c4dff" d="M36.985 0H7.963C7.155 0 6.5.655 6.5 1.926V55c0 .345.655 1 1.463 1h40.074c.808 0 1.463-.655 1.463-1V12.978c0-.696-.093-.92-.257-1.085L37.607.257A.884.884 0 0036.985 0z"/>
        <path fill="#fd7000ff" d="M37.5.151V12h11.849z"/>
        <path fill="#1d3272ff" d="M6.518 16h43v24h-43z"/>
        <path fill="#eee" d="M20.731 31.329q0 3.447-1.584 5.545-1.585 2.085-4.253 2.085-2.85 0-4.406-2.015l-.125 1.737H8V17.333h2.571v7.964q1.557-1.932 4.295-1.932t4.295 2.07q1.57 2.072 1.57 5.671zm-2.571-.292q0-2.627-1.015-4.059-1.014-1.431-2.918-1.431-2.544 0-3.656 2.363v6.504q1.182 2.363 3.683 2.363 1.849 0 2.877-1.432 1.029-1.431 1.029-4.308zM23.33 31.037q0-3.46 1.64-5.56 1.64-2.112 4.295-2.112 2.64 0 4.183 1.807v-7.84h2.571v21.349h-2.362l-.125-1.612q-1.543 1.89-4.295 1.89-2.613 0-4.267-2.14-1.64-2.14-1.64-5.588zm2.571.292q0 2.557 1.057 4.002 1.056 1.446 2.918 1.446 2.446 0 3.572-2.196v-6.908q-1.153-2.126-3.544-2.126-1.89 0-2.946 1.46-1.057 1.459-1.057 4.322zM41.287 38.681v-13.05H38.91v-1.988h2.377V22.1q0-2.418 1.293-3.739 1.292-1.32 3.655-1.32.89 0 1.765.236l-.139 2.085q-.653-.125-1.39-.125-1.25 0-1.932.737-.68.722-.68 2.084v1.585h3.21v1.987h-3.21v13.051z"/>
    </symbol>

    <symbol id="import_csv" viewBox="0 0 56 56">
        <path fill="#ff9c4dff" d="M36.985 0H7.963C7.155 0 6.5.655 6.5 1.926V55c0 .345.655 1 1.463 1h40.074c.808 0 1.463-.655 1.463-1V12.978c0-.696-.093-.92-.257-1.085L37.607.257A.884.884 0 0036.985 0z"/>
        <path fill="#fd7000ff" d="M37.5.151V12h11.849z"/>
        <path fill="#1d3272ff" d="M6.518 16h43v24h-43z"/>
        <path fill="#eee" d="M14.448 33.485q1.325 0 2.315-.803.99-.802 1.097-2.006h2.34q-.066 1.244-.856 2.367-.789 1.124-2.113 1.793-1.311.669-2.783.669-2.956 0-4.709-1.967Q8 31.558 8 28.134v-.415q0-2.114.776-3.76.776-1.645 2.22-2.554 1.459-.91 3.439-.91 2.435 0 4.04 1.458 1.619 1.458 1.726 3.786H17.86q-.107-1.405-1.07-2.3-.95-.91-2.355-.91-1.887 0-2.93 1.364-1.03 1.351-1.03 3.92v.468q0 2.502 1.03 3.853 1.03 1.35 2.943 1.35zM31.411 31.398q0-1.003-.762-1.552-.75-.562-2.636-.963-1.873-.401-2.983-.963-1.097-.562-1.632-1.338-.522-.776-.522-1.846 0-1.78 1.499-3.01 1.511-1.231 3.852-1.231 2.462 0 3.987 1.27 1.539 1.272 1.539 3.252h-2.489q0-1.017-.87-1.753-.856-.736-2.167-.736-1.35 0-2.113.59-.763.588-.763 1.538 0 .896.71 1.35.708.456 2.554.87 1.86.415 3.01.99 1.15.575 1.7 1.392.561.802.561 1.966 0 1.94-1.552 3.117-1.551 1.164-4.026 1.164-1.74 0-3.077-.615-1.338-.616-2.1-1.713-.75-1.11-.75-2.394h2.475q.067 1.244.99 1.98.937.722 2.462.722 1.404 0 2.247-.562.856-.575.856-1.525zM41.886 31.88l3.586-11.117H48l-5.19 14.474h-1.887L35.68 20.763h2.528z"/>
    </symbol>

    <symbol id="import_ses" viewBox="0 0 56 56">
        <path fill="#ff9c4dff" d="M36.985 0H7.963C7.155 0 6.5.655 6.5 1.926V55c0 .345.655 1 1.463 1h40.074c.808 0 1.463-.655 1.463-1V12.978c0-.696-.093-.92-.257-1.085L37.607.257A.884.884 0 0036.985 0z"/>
        <path fill="#fd7000ff" d="M37.5.151V12h11.849z"/>
        <path fill="#1d3272ff" d="M6.518 16h43v24h-43z"/>
        <path fill="#eee" d="M17 31.387q0-1-.76-1.547-.747-.56-2.627-.96-1.866-.4-2.973-.96-1.093-.56-1.627-1.333-.52-.774-.52-1.84 0-1.774 1.494-3 1.506-1.227 3.84-1.227 2.453 0 3.973 1.267 1.533 1.266 1.533 3.24h-2.48q0-1.014-.866-1.747-.854-.733-2.16-.733-1.347 0-2.107.586-.76.587-.76 1.534 0 .893.707 1.346.706.454 2.546.867 1.854.413 3 .987 1.147.573 1.694 1.386.56.8.56 1.96 0 1.934-1.547 3.107-1.547 1.16-4.013 1.16-1.734 0-3.067-.613-1.333-.614-2.093-1.707Q8 32.053 8 30.773h2.467q.066 1.24.986 1.974.934.72 2.454.72 1.4 0 2.24-.56.853-.574.853-1.52zM28.667 35.48q-2.934 0-4.774-1.92-1.84-1.933-1.84-5.16v-.453q0-2.147.814-3.827.826-1.693 2.293-2.64 1.48-.96 3.2-.96 2.813 0 4.373 1.853 1.56 1.854 1.56 5.307v1.027H24.52q.053 2.133 1.24 3.453 1.2 1.307 3.04 1.307 1.307 0 2.213-.534.907-.533 1.587-1.413l1.507 1.173q-1.814 2.787-5.44 2.787zm-.307-12.933q-1.493 0-2.507 1.093-1.013 1.08-1.253 3.04h7.227v-.187q-.107-1.88-1.014-2.906-.906-1.04-2.453-1.04zM45.533 31.387q0-1-.76-1.547-.746-.56-2.626-.96-1.867-.4-2.974-.96-1.093-.56-1.626-1.333-.52-.774-.52-1.84 0-1.774 1.493-3 1.507-1.227 3.84-1.227 2.453 0 3.973 1.267 1.534 1.266 1.534 3.24h-2.48q0-1.014-.867-1.747-.853-.733-2.16-.733-1.347 0-2.107.586-.76.587-.76 1.534 0 .893.707 1.346.707.454 2.547.867 1.853.413 3 .987 1.146.573 1.693 1.386.56.8.56 1.96 0 1.934-1.547 3.107-1.546 1.16-4.013 1.16-1.733 0-3.067-.613-1.333-.614-2.093-1.707-.747-1.107-.747-2.387H39q.067 1.24.987 1.974.933.72 2.453.72 1.4 0 2.24-.56.853-.574.853-1.52z"/>
    </symbol>

    <symbol id="fitView" viewBox="-13 -13 120 120">
        <g stroke-width="4" stroke-linejoin="round" stroke="#222732">
            <path fill="#6581d899" marker-mid="url(#fitArr)" d="M85 25v44L47 91 9 69V25L47 3l38 22v44" />
            <path d="M47 47v44" />
            <path fill="none" d="M85 25L47 47 9 25" />
        </g>
    </symbol>

    <symbol id="toggleNodes" viewBox="-8 -8 110 110">
        <g stroke-width="4" stroke-linejoin="round" stroke="#222732" marker-start="url(#node)" marker-end="url(#node)"
            marker-mid="url(#node)">
            <path fill="#6581d899" d="M47 3l38 22v44L47 91 9 69V25z" />
            <path d="M47 47v44" />
            <path fill="none" d="M85 25L47 47 9 25" />
        </g>
    </symbol>

    <symbol id="toggleEdges" viewBox="0 0 94 94">
        <g stroke="#fd7000" stroke-linejoin="round" stroke-width="4">
            <path fill="#6581d899" d="M47 3l38 22v44L47 91 9 69V25z" />
            <path fill="none" d="M85 25L47 47 9 25" />
            <path d="M47 47v44" />
        </g>
    </symbol>

    <symbol id="toggleBackground"  viewBox="0 0 100 100">
        <g stroke="#222732" stroke-width="4" stroke-linejoin="round">
            <path fill="#f7ffff" d="M2 68V2h66v66z"/>
            <path fill="#222732" d="M32 98V32h66v66z"/>
        </g>
    </symbol>

    <symbol id="backView" viewBox="0 0 94 94">
        <g stroke-width="4" stroke-linejoin="round" stroke="#222732">
            <path fill="#6581d899" d="M47 3l38 22v44L47 91 9 69V25z" />
            <path fill="#1d3272" d="M47 3v44l38 22V25z" />
            <path fill="none" d="M85 25L47 47 9 25" />
            <path d="M47 47v44" />
        </g>
    </symbol>
    <symbol id="bottomView" viewBox="0 0 94 94">
        <g stroke-width="4" stroke-linejoin="round" stroke="#222732">
            <path fill="#6581d899" d="M47 3l38 22v44L47 91 9 69V25z" />
            <path fill="#1d3272" d="M85 69L47 91 9 69l38-22z" />
            <path fill="none" d="M85 25L47 47 9 25" />
            <path d="M47 47v44" />
        </g>
    </symbol>
    <symbol id="frontView" viewBox="0 0 94 94">
        <g stroke-width="4" stroke-linejoin="round" stroke="#222732">
            <path fill="#6581d899" d="M47 3l38 22v44L47 91 9 69V25z" />
            <path fill="#1d3272" d="M9 25l38 22v44L9 69z" />
            <path d="M47 47l38-22" />
        </g>
    </symbol>
    <symbol id="topView" viewBox="0 0 94 94">
        <g stroke-width="4" stroke-linejoin="round" stroke="#222732">
            <path fill="#6581d899" d="M47 3l38 22v44L47 91 9 69V25z" />
            <path fill="#1d3272" d="M9 25l38 22 38-22L47 3z" />
            <path d="M47 47v44" />
        </g>
    </symbol>
    <symbol id="leftView" viewBox="0 0 94 94">
        <g stroke-width="4" stroke-linejoin="round" stroke="#222732">
            <path fill="#6581d899" d="M47 3l38 22v44L47 91 9 69V25z" />
            <path fill="#1d3272" d="M9 69l38-22V3L9 25z" />
            <path fill="none" d="M85 25L47 47 9 25" />
            <path d="M47 47v44" />
        </g>
    </symbol>
    <symbol id="rightView" viewBox="0 0 94 94">
        <g stroke-width="4" stroke-linejoin="round" stroke="#222732">
            <path fill="#6581d899" d="M47 3l38 22v44L47 91 9 69V25z" />
            <path fill="#1d3272" d="M85 25L47 47v44l38-22z" />
            <path d="M47 47L9 25" />
        </g>
    </symbol>
    <symbol id="isoView" viewBox="0 0 94 94">
        <g stroke-width="4" stroke-linejoin="round" stroke="#222732">
            <path fill="#6581d899" d="M47 3l38 22v44L47 91 9 69V25z" />
            <path fill="none" d="M85 25L47 47 9 25" />
            <path d="M47 47v44" />
        </g>
    </symbol>
    <symbol id="shadedRander" viewBox="0 0 94 94">
        <g stroke-width="4" stroke-linejoin="round" stroke="#222732">
            <path fill="#6581d899" d="M47 3l38 22v44L47 91 9 69V25z" />
            <path fill="#4C61A2" d="M9 25l38 22v44L9 69z" />
            <path fill="#3D4D82" d="M85 25L47 47v44l38-22z" />
        </g>
    </symbol>
    <symbol id="transparentRander" viewBox="0 0 94 94">
        <g stroke-width="4" stroke-linejoin="round" stroke="#222732">
            <path fill="#6581d850" d="M47 3l38 22v44L47 91 9 69V25z" />
            <path fill="none" d="M85 25L47 47 9 25" />
            <path d="M47 47v44" />
        </g>
        <path fill="none" d="M85 69L47 47 9 69" stroke-width="4" stroke-linejoin="round" stroke="#22273250" />
    </symbol>
    <symbol id="wireframeRander" viewBox="0 0 94 94">
        <g stroke-width="4" stroke-linejoin="round" stroke="#222732">
            <path fill="none" d="M47 3l38 22v44L47 91 9 69V25z" />
            <path fill="none" d="M85 25L47 47 9 25" />
            <path d="M47 47v44" />
        </g>
    </symbol>
    <symbol id="perspectiveView" viewBox="0 0 94 94">
        <g stroke-width="4" stroke-linejoin="round" stroke="#222732">
            <path fill="#6581d899" d="M47 91L14 58 5 14 47 3l42 11-9 44z" />
            <path fill="none" d="M89 14L47 36 5 14" />
            <path d="M47 36v55" />
        </g>
    </symbol>
    <symbol id="shrinkElements" viewBox="0 0 94 94">
        <path fill="#6581d899"
            d="M12.8 31.6l30.4 17.6v35.2L12.8 66.8zM16.6 25L47 42.6 77.4 25 47 7.4zM81.2 31.6L50.8 49.2v35.2l30.4-17.6z" />
    </symbol>
    <symbol id="compass" viewBox="0 0 400 400">
        <path fill="#3d4d82"
            d="M127.87 400a5.15 5.15 0 0 1-5.08-6.03l7.11-41.23a5.15 5.15 0 1 1 10.16 1.75l-7.12 41.23a5.15 5.15 0 0 1-5.07 4.28z" />
        <path fill="#222732"
            d="M157.18 169.37l-37.22 184.38a14.94 14.94 0 1 0 29.29 5.91L184.6 184.6a61.93 61.93 0 0 1-1.17-.26 61.93 61.93 0 0 1-5.87-1.96 61.93 61.93 0 0 1-5.65-2.52 61.93 61.93 0 0 1-5.37-3.08 61.93 61.93 0 0 1-5.04-3.6 61.93 61.93 0 0 1-4.32-3.8z" />
        <path fill="#3d4d82"
            d="M272.13 400a5.15 5.15 0 0 1-5.07-4.28l-7.12-41.23a5.15 5.15 0 0 1 10.15-1.75l7.12 41.23a5.15 5.15 0 0 1-5.08 6.03z" />
        <path fill="#222732"
            d="M215.4 184.56l35.35 175.1a14.94 14.94 0 1 0 29.3-5.9L242.8 169.3a61.93 61.93 0 0 1-2.92 2.71 61.93 61.93 0 0 1-4.93 3.75 61.93 61.93 0 0 1-5.27 3.23 61.93 61.93 0 0 1-5.57 2.7 61.93 61.93 0 0 1-5.82 2.12 61.93 61.93 0 0 1-2.9.74z" />
        <path fill="#3d4d82" d="M191.07 43.45h17.86v28.51h-17.86z" />
        <path fill="#222732" d="M182.23 0h35.54v48.43h-35.54z" />
        <path fill="#fd7000"
            d="M200 62.73a61.93 61.93 0 0 0-61.93 61.93A61.93 61.93 0 0 0 200 186.58a61.93 61.93 0 0 0 61.93-61.92A61.93 61.93 0 0 0 200 62.73zm0 27.4a34.53 34.53 0 0 1 34.52 34.53A34.53 34.53 0 0 1 200 159.18a34.53 34.53 0 0 1-34.53-34.52A34.53 34.53 0 0 1 200 90.13z" />
    </symbol>
    <symbol id="crossSection" viewBox="0 0 100 100">
        <path fill="#6581d899" stroke="#222732" stroke-linejoin="round" stroke-width="4" marker-end="url(#node)"
            marker-mid="url(#node)" marker-start="url(#node)" d="M9 9h82v82H9z" />
        <path stroke="#1d3272ff" stroke-width="6" marker-start="url(#arr1)" d="M75 50H25" />
        <path fill="none" stroke="#c61d1dff" stroke-width="6" marker-start="url(#arr2)"
            d="M40 30a20 20 0 0 1 20 20 20 20 0 0 1-20 20" />
    </symbol>
    <symbol id="deform" viewBox="0 0 100 100">
        <path fill="#6581d899" stroke="#222732" stroke-linejoin="round" stroke-width="4" marker-end="url(#node)"
            marker-mid="url(#node)" marker-start="url(#node)"
            d="M9 9c31 11 51 11 82 0-11 31-11 51 0 82-31-11-51-11-82 0C20 60 20 40 9 9z" />
    </symbol>
    <symbol id="fringe" viewBox="0 0 100 100">
        <path fill="url(#fringeGrad)" stroke="#222732" stroke-linejoin="round" stroke-width="4" marker-end="url(#node)"
            marker-mid="url(#node)" marker-start="url(#node)" d="M9 9h82v82H9z" />
    </symbol>
    <symbol id="labelIds" viewBox="0 0 100 100">
        <path fill="#6581d899" stroke="#222732" stroke-linejoin="round" stroke-width="4" marker-end="url(#node)"
            marker-mid="url(#node)" marker-start="url(#node)" d="M9 9h82v82H9z" />
        <g fill="#222732">
            <path
                d="M28.98 18.15H39.8v26.9h-5.88V23.1h-5.25v-4.95zM67.31 29.29c.62-.93.93-1.86.93-2.79 0-.93-.3-1.54-.93-2.16a2.8 2.8 0 0 0-2.16-.93c-1.55 0-3.4 1.24-4.95 3.71l-4.94-2.78A18.41 18.41 0 0 1 59.27 20a11 11 0 0 1 5.88-1.55c2.47 0 4.33.62 6.18 2.17 1.86 1.54 2.79 3.4 2.79 6.18 0 1.24-.31 2.78-.93 4.02-.62 1.24-2.17 2.78-4.02 4.95l-4.95 4.94h10.51v5.26H55.56v-4.33l8.04-8.04c1.86-2.16 3.1-3.4 3.71-4.32zM26.5 59.9v-5.26H42.9v4.02l-5.57 6.18a7.29 7.29 0 0 1 4.95 2.78 7.58 7.58 0 0 1 1.86 4.95 9.1 9.1 0 0 1-2.79 6.8 11.28 11.28 0 0 1-7.42 2.48c-3.09 0-5.87-.93-8.96-3.1l2.47-4.63c2.47 1.85 4.95 2.78 6.8 2.78 1.24 0 2.17-.31 3.1-.93a2.81 2.81 0 0 0 1.23-2.47c0-1.24-.3-1.86-1.24-2.78a6.6 6.6 0 0 0-3.7-.93c-.93 0-2.17.3-3.72.62v-4.33l5.26-6.19zM66.08 70.4v-4.94h5.87v4.64h3.1v5.25h-3.1v6.5h-5.87v-6.5H55.26v-4.64l9.58-16.07h6.8L62.37 70.1h3.7z" />
        </g>
    </symbol>
    <symbol id="properties" viewBox="0 0 100 100">
        <path fill="#6581d899" stroke="#222732" stroke-linejoin="round" stroke-width="4" marker-end="url(#node)"
            marker-mid="url(#node)" marker-start="url(#node)" d="M9 9h82v82H9z" />
        <path fill="#fd7000"
            d="M62.83 25a12.18 12.18 0 0 0-11.77 15.33L26.53 64.86a5.23 5.23 0 0 0 0 7.39l.61.6 22.38-22.37-22.38 22.38.61.61a5.23 5.23 0 0 0 7.39 0l24.53-24.53A12.18 12.18 0 0 0 74.29 33.1l-6.56 6.55-5.53-1.84-1.84-5.53 6.55-6.56c-1.33-.48-2.71-.71-4.08-.71z" />
    </symbol>
    <symbol id="help" viewBox="0 0 58 58">
        <path fill="#fd7000"
            d="M29 0a29 29 0 1 0 0 58 29 29 0 0 0 0-58zm0 13.52a3.64 3.64 0 1 1 0 7.29 3.64 3.64 0 0 1 0-7.29zm6.37 30.96H22.63V39h2.73V28.1h-2.73v-5.46h10.01V39h2.73v5.47z" />
        <path fill="#fd7000" d="M53.62 44.3l-9.31 9.32 12.72 3.41z" />
    </symbol>
    <symbol id="settings" viewBox="0 0 58 58">
        <path fill="#1d3272"
            d="M32.7 25.23l-2.66 2.66-1.06 1.05L27.93 30l-2.66 2.66 9.55 9.54a4.5 4.5 0 0 0 6.36 0l.53-.53.53-.53a4.5 4.5 0 0 0 0-6.36z" />
        <path fill="#6581d8"
            d="M2.46.3L1.41 1.38.35 2.42 3 8.26l3.5.32 10.29 10.28 1.06-1.05 1.05-1.06L8.62 6.45l-.32-3.5zM26.33 24.17l-1.06 1.06-1.06 1.06L27.93 30l1.05-1.06 1.06-1.05z" />
        <path fill="#fd7000"
            d="M32.61-.03a10.5 10.5 0 0 0-10.14 13.22L1.32 34.34a4.5 4.5 0 0 0 0 6.36l.52.53 19.3-19.3-19.3 19.3.53.53a4.5 4.5 0 0 0 6.37 0L29.9 20.61A10.5 10.5 0 0 0 42.5 6.95l-5.65 5.64L32.07 11l-1.59-4.77L36.13.58c-1.15-.41-2.34-.61-3.52-.61z" />
    </symbol>
    <symbol id="toggleTree" viewBox="0 0 58 58">
        <path fill="#fd7000"
            d="M22.41 20.66H2.73a.69.69 0 0 1-.66-.86L6.54 7.54c.08-.3.35-.5.66-.5h19.68c.45 0 .66.43.66.86l-4.47 12.25c-.08.3-.35.51-.66.51z" />
        <path fill="#ff9c4d"
            d="M24.14 3.08h-11.1L10.84 0H2.8a.76.76 0 0 0-.77.76v18.79h.1l4.4-12c.08-.3.35-.52.66-.52h17.7v-3.2a.76.76 0 0 0-.76-.75z" />
        <rect width="22.83" height="17.59" x="30.81" y="17.63" fill="#fd7000" ry=".7" />
        <path fill="#ff9c4d" d="M31.57 14.55a.76.76 0 0 0-.76.76v3.02a.7.7 0 0 1 .7-.7H52.9h-11.1l-2.2-3.08z" />
        <rect width="22.83" height="17.59" x="30.81" y="40.41" fill="#fd7000" ry=".7" />
        <path fill="#ff9c4d" d="M31.57 37.34a.76.76 0 0 0-.76.76v3.01a.7.7 0 0 1 .7-.7H52.9h-11.1l-2.2-3.07z" />
        <path stroke="#646464" stroke-width="1.81" d="M12.01 20.66v28.32M30.81 48.98h-19.7M30.81 27.44h-19.7" />
    </symbol>
    <symbol id="measure" viewBox="0 0 512 512">
        <path fill="#fd7000" d="M24.34 395.68L395.68 24.34l91.98 91.98-371.34 371.34z" />
        <path fill="#222732"
            d="M509.05 109.19L402.8 2.95a10.09 10.09 0 0 0-14.25 0l-70.11 70.11-70.11 70.1v.01L38 353.5 2.95 388.56a10.09 10.09 0 0 0 0 14.25L109.2 509.05a10.05 10.05 0 0 0 14.26 0l385.6-385.6a10.08 10.08 0 0 0 0-14.26zM116.32 487.66l-91.98-91.98 20.8-20.8 17.65 17.67a10.05 10.05 0 0 0 14.26 0 10.08 10.08 0 0 0 0-14.26l-17.66-17.66 20.8-20.8 32.21 32.21a10.05 10.05 0 0 0 14.26 0 10.08 10.08 0 0 0 0-14.25l-32.21-32.22 20.8-20.8 17.66 17.67a10.05 10.05 0 0 0 14.25 0 10.08 10.08 0 0 0 0-14.26l-17.66-17.66 20.8-20.8 32.21 32.22a10.05 10.05 0 0 0 14.26 0 10.08 10.08 0 0 0 0-14.26l-32.22-32.21 20.8-20.8L203 252.32a10.05 10.05 0 0 0 14.25 0 10.08 10.08 0 0 0 0-14.26l-17.66-17.65 20.8-20.8 32.22 32.22a10.05 10.05 0 0 0 14.26 0 10.08 10.08 0 0 0 0-14.26l-32.22-32.22 20.8-20.8 17.66 17.67a10.05 10.05 0 0 0 14.25 0 10.08 10.08 0 0 0 0-14.26l-17.65-17.66 20.8-20.8 32.21 32.22a10.05 10.05 0 0 0 14.26 0 10.08 10.08 0 0 0 0-14.25l-32.22-32.22 20.8-20.8 17.65 17.65a10.05 10.05 0 0 0 14.26 0 10.08 10.08 0 0 0 0-14.25l-17.66-17.66 20.8-20.8 32.22 32.22a10.05 10.05 0 0 0 14.26 0 10.08 10.08 0 0 0 0-14.26l-32.21-32.22 20.8-20.8 91.97 91.99z" />
    </symbol>
    <symbol id="showHide" viewBox="0 0 96 96">
        <g stroke="#222732">
            <path fill="#6581d8"
                d="M95.3 48.17L83.15 60.3a49.48 49.48 0 0 1-69.98 0L.7 47.83 12.84 35.7a49.48 49.48 0 0 1 69.98 0z" />
            <path fill="#3d4d82"
                d="M62.23 33.77A20.13 20.13 0 0 0 48 27.87 20.13 20.13 0 0 0 27.86 48a20.13 20.13 0 0 0 5.91 14.23z" />
            <path stroke-width="4" d="M9 87L87 9" />
        </g>
    </symbol>
    <symbol id="checked" viewBox="0 0 426.67 426.67">
        <path fill="#ddd"
            d="M153.5 366.84c-8.65 0-17.32-3.3-23.92-9.91L9.9 237.26a33.84 33.84 0 1 1 47.87-47.86l95.72 95.73L368.9 69.74a33.84 33.84 0 1 1 47.85 47.87L177.44 356.93a33.75 33.75 0 0 1-23.94 9.9z" />
    </symbol>
    <symbol id="close" viewBox="0 0 12 16">
        <path fill="#eee"
            d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z" />
    </symbol>
    <symbol id="eye" viewBox="0 0 561 561">
        <path fill="#ddd"
            d="M280.5 89.25C153 89.25 43.35 168.3 0 280.5c43.35 112.2 153 191.25 280.5 191.25S517.65 392.7 561 280.5C517.65 168.3 408 89.25 280.5 89.25zm0 318.75C209.1 408 153 351.9 153 280.5S209.1 153 280.5 153 408 209.1 408 280.5 351.9 408 280.5 408zm0-204c-43.35 0-76.5 33.15-76.5 76.5s33.15 76.5 76.5 76.5 76.5-33.15 76.5-76.5-33.15-76.5-76.5-76.5z" />
    </symbol>
    <symbol id="hide" viewBox="0 0 12 12">
        <path fill="#ddd" d="M0 5h12v2H0z" />
    </symbol>
    <symbol id="search" viewBox="0 0 250.31 250.31">
        <path fill="#646464"
            d="M244.19 214.6l-54.38-54.37c-.3-.3-.63-.5-.93-.76a102.4 102.4 0 0 0 16.94-56.56C205.82 46.08 159.75 0 102.92 0S0 46.08 0 102.91c0 56.84 46.07 102.91 102.91 102.91 20.9 0 40.32-6.24 56.55-16.94.27.3.47.64.76.93l54.38 54.38a20.92 20.92 0 0 0 29.59-29.59zM102.9 170.15a67.24 67.24 0 1 1 0-134.47 67.24 67.24 0 0 1 0 134.47z" />
    </symbol>
    <symbol id="logo" viewBox="0 0 400 346.41">
        <path d="M100 0 l-50 86.6025 h100 Z" fill="#c61d1d" />
        <path d="M100 0 h100 l-50 86.6025 Z" fill="#c61d1d" />
        <path d="M200 0 l-50 86.6025 h100 Z" fill="#c61d1d" />
        <path d="M200 0 h100 l-50 86.6025 Z" fill="#c61d1d" />
        <path d="M300 0 l-50 86.6025 h100 Z" fill="#1d3272" />
        <path d="M50 86.6025 l-50 86.6025 h100 Z" fill="#c61d1d" />
        <path d="M50 86.6025 h100 l-50 86.6025 Z" fill="#c61d1d" />
        <path d="M150 86.6025 l-50 86.6025 h100 Z" fill="#c61d1d" />
        <path d="M150 86.6025 h100 l-50 86.6025 Z" fill="#c61d1d" />
        <path d="M250 86.6025 l-50 86.6025 h100 Z" fill="#1d3272" />
        <path d="M250 86.6025 h100 l-50 86.6025 Z" fill="#1d3272" />
        <path d="M350 86.6025 l-50 86.6025 h100 Z" fill="#1d3272" />
        <path d="M0 173.205 h100 l-50 86.6025 Z" fill="#4c9a2a" />
        <path d="M100 173.205 l-50 86.6025 h100 Z" fill="#4c9a2a" />
        <path d="M100 173.205 h100 l-50 86.6025 Z" fill="#4c9a2a" />
        <path d="M200 173.205 l-50 86.6025 h100 Z" fill="#4c9a2a" />
        <path d="M200 173.205 h100 l-50 86.6025 Z" fill="#1d3272" />
        <path d="M300 173.205 l-50 86.6025 h100 Z" fill="#1d3272" />
        <path d="M300 173.205 h100 l-50 86.6025 Z" fill="#1d3272" />
        <path d="M50 259.8075 h100 l-50 86.6025 Z" fill="#4c9a2a" />
        <path d="M150 259.8075 l-50 86.6025 h100 Z" fill="#4c9a2a" />
        <path d="M150 259.8075 h100 l-50 86.6025 Z" fill="#4c9a2a" />
        <path d="M250 259.8075 l-50 86.6025 h100 Z" fill="#4c9a2a" />
        <path d="M250 259.8075 h100 l-50 86.6025 Z" fill="#1d3272" />
    </symbol>
</svg>
`;