/** @format */

import ToHtml from "../../shared/ToHtml"
const lecture_2_2 = `
<div _ngcontent-jlq-c92="" class="post-body show-scroll"><span _ngcontent-jlq-c92=""><katex _ngcontent-jlq-c92="" _nghost-jlq-c20=""><span _ngcontent-jlq-c20=""><p><strong>Basic Program Structure</strong></p>

<p><span style="font-family: Courier New, Courier, monospace">#preprocessor directives // e.g., #include &amp; #define</span><br>
<span style="font-family: Courier New, Courier, monospace">int main(void) { // main function (entry point)</span><br>
<span style="font-family: Courier New, Courier, monospace">&nbsp; // Variable Declaration (&lt;data type&gt; &lt;var name&gt;)<br>
&nbsp; // Input (scanf)<br>
&nbsp; // Compute (arithmetic, selection, iteration)<br>
&nbsp; // Output (printf)<br>
&nbsp; return 0; // convention (0: no error, other: error, may be used by OS for further action)<br>
}</span></p>

<p>&nbsp;</p>

<p><strong>Preprocessor Directives</strong></p>

<blockquote>
<p><span style="font-family: Courier New, Courier, monospace">#include &lt;header files&gt;</span></p>
</blockquote>

<p>header files have the same name as C file but the extension is .h instead of .c.&nbsp; It contains the function prototypes that is defined in the C file (we will discuss this later in Lecture 4).</p>

<blockquote>
<p><span style="font-family: Courier New, Courier, monospace">#define &lt;from&gt; &lt;to&gt;</span></p>
</blockquote>

<p>Replace all occurrences of <span style="font-family: Courier New, Courier, monospace">&lt;from&gt;</span> (must match the whole lexeme) with <span style="font-family: Courier New, Courier, monospace">&lt;to&gt;</span>.&nbsp; Also called macro expansion.</p>

<p>&nbsp;</p>

<p><strong>Input/Output</strong></p>

<blockquote>
<p><span style="font-family: Courier New, Courier, monospace">scanf(format string, input list);&nbsp; // input<br>
printf(format string);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // output<br>
printf(format string, print list); // output</span></p>
</blockquote>

<p>Typically the string uses what we call as a placeholder (e.g., <span style="font-family: Courier New, Courier, monospace">%d</span>).&nbsp; This placeholder in the format string will be replaced with actual value from print list (<u><em>for output</em></u>) or used to parse user input and assign it to the variable in input list (<u><em>for input</em></u>).</p>

<p>Common format and how to remember them:</p>

<table border="1" style="width: 100%">
	<thead>
		<tr>
			<th scope="row">Placeholder</th>
			<th scope="col">Variable Type</th>
			<th scope="col">How to Remember?</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row"><span style="font-family: Courier New, Courier, monospace">%c</span></th>
			<td><span style="font-family: Courier New, Courier, monospace">char</span></td>
			<td>C for character</td>
		</tr>
		<tr>
			<th scope="row"><span style="font-family: Courier New, Courier, monospace">%d</span></th>
			<td><span style="font-family: Courier New, Courier, monospace">int</span></td>
			<td>D for decimal integer</td>
		</tr>
		<tr>
			<th scope="row"><span style="font-family: Courier New, Courier, monospace">%f</span></th>
			<td><span style="font-family: Courier New, Courier, monospace">float</span> (also <span style="font-family: Courier New, Courier, monospace">double</span> but only for <u><em>output</em></u>)</td>
			<td>F for float</td>
		</tr>
		<tr>
			<th scope="row"><span style="font-family: Courier New, Courier, monospace">%lf</span></th>
			<td><span style="font-family: Courier New, Courier, monospace">double</span> (for <u><em>input</em></u> only)</td>
			<td>LF for long float (longer than float)</td>
		</tr>
	</tbody>
</table>

<p><br>
Can also display the width and rounding (<u><em>for output</em></u>).&nbsp; The placeholder are matched positionally with the input list (<u><em>for input</em></u>) or with the print list (<em><u>for output</u></em>).</p>

<p>For <span style="font-family: Courier New, Courier, monospace">scanf</span>, we need to pass the <strong>address</strong> (<u><em>more on this in pointer</em></u>) by using the <span style="font-family: Courier New, Courier, monospace">&amp;</span> operator also called the address operator (&amp; is called ampersand, <u><em><strong>a</strong></em></u> for both address and ampersand).</p>

<blockquote>
<p><span style="font-family: Courier New, Courier, monospace">scanf("%d %lf", &amp;x, &amp;y); // %d --&gt; x&nbsp; %lf --&gt; y<br>
printf("x = %d; y = %f", x, y);</span></p>
</blockquote>

<p>&nbsp;</p>

<p><strong>Compute</strong></p>

<p><em><u>Standard Arithmetic</u></em></p>

<table border="1" style="width: 100%">
	<thead>
		<tr>
			<th scope="row">Operator</th>
			<th scope="col">Operation</th>
			<th scope="col">Comments</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row"><span style="font-family: Courier New, Courier, monospace">expr++<br>
			expr--</span></th>
			<td>Postfix increment<br>
			Postfix decrement</td>
			<td>Postfix op:<br>
			<em>return the value first <u>then</u> increment/decrement</em></td>
		</tr>
		<tr>
			<th scope="row"><span style="font-family: Courier New, Courier, monospace">++expr<br>
			--expr<br>
			+expr<br>
			-expr</span></th>
			<td>Prefix increment<br>
			Prefix decrement<br>
			Unary positive<br>
			Unary negative</td>
			<td>Prefix op:<br>
			<em>increment/decrement first <u>then</u> return the updated value</em><br>
			Unary: typically just unary negative to write negative number</td>
		</tr>
		<tr>
			<th scope="row"><span style="font-family: Courier New, Courier, monospace">*<br>
			/<br>
			%</span></th>
			<td>Multiply<br>
			Divide<br>
			Remainder</td>
			<td>Associativity:<br>
			<em>Left-to-right</em></td>
		</tr>
		<tr>
			<th scope="row"><span style="font-family: Courier New, Courier, monospace">+<br>
			-</span></th>
			<td>Add<br>
			Subtract</td>
			<td>
			<p>Associativity:<br>
			<em>Left-to-right</em></p>
			</td>
		</tr>
	</tbody>
</table>

<p><br>
For mixed-type operations, we follow the "more general" type.&nbsp; We say that float is "more general" than integer because we can easily make an integer into a float by adding .0 at the end.&nbsp; On the other hand, not all float can be represented as integer.&nbsp; For instance, 2.5 cannot be represented as integer.</p>

<p>Converting float to integer is called <strong>truncation</strong>.&nbsp; This is done by simply removing any digits after the decimal point as well as the decimal point.&nbsp; So:</p>

<ul>
	<li>2.1, 2.5 and 2.9 are all truncated to 2</li>
	<li>-2.1, -2.5 and -2.9 are all truncated to -2</li>
</ul>

<p>In the case that <strong><em><u>both operands are integer</u></em></strong> the result is always an integer.&nbsp; This is most relevant for integer division.</p>

<ul>
	<li>10/4 is evaluated into 2 and not 2.5 (<em>due to truncation</em>)</li>
	<li>-10/4 is evaluated into -2 and not -2.5 (<em>due to truncation</em>)</li>
</ul>

<p>This is regardless of whether we will assign that into a float/double later on or not.&nbsp; This is simply because the expression <span style="font-family: Courier New, Courier, monospace">double x = 10/4;</span> is evaluated in several steps as follows.</p>

<ol>
	<li>Evaluate the right-hand side:
	<ul>
		<li>Right-hand side is 10/4</li>
		<li>Both operands are integer</li>
		<li>Result is 2</li>
	</ul>
	</li>
	<li>Assign the result from step (1) into the left-hand side:
	<ul>
		<li>Left-hand side is a <span style="font-family: Courier New, Courier, monospace">double x</span></li>
		<li>We convert 2 to double</li>
		<li>We assign <span style="font-family: Courier New, Courier, monospace">x = 2.0</span> due to the conversion</li>
	</ul>
	</li>
</ol>

<p>There are several ways to <strong>force</strong> a division into a non-integer division:</p>

<ol>
	<li><span style="font-family: Courier New, Courier, monospace">(double) 10 / 4</span>

	<ul>
		<li>This should be read as <span style="font-family: Courier New, Courier, monospace">((double) 10) / 4</span></li>
	</ul>
	</li>
	<li>1.0 * 10 / 4
	<ul>
		<li>This should be read as <span style="font-family: Courier New, Courier, monospace">(1.0 * 10) / 4</span></li>
	</ul>
	</li>
</ol>

<p><em><u>Selection</u></em></p>

<p><span style="font-family: Courier New, Courier, monospace">if...else...</span> similar to many other languages.&nbsp; There is no special <span style="font-family: Courier New, Courier, monospace">elif</span> keyword.&nbsp; This is done by a simple trick:</p>

<blockquote>
<p><span style="font-family: Courier New, Courier, monospace">if(cond) {<br>
&nbsp; // body<br>
} else {<br>
&nbsp; if(cond) {<br>
&nbsp;&nbsp;&nbsp; // body<br>
&nbsp; }<br>
}</span></p>
</blockquote>

<p>Then, the special rule in C (also in Java and JavaScript) is that if a block consists of <strong><u>exactly one statement</u></strong>, then the curly bracket is <em><u>optional</u></em>.&nbsp; So, this is allowed:</p>

<blockquote>
<p><span style="font-family: Courier New, Courier, monospace">if(x == 0)<br>
&nbsp; x = 1; // only executed if x == 0<br>
x = 2;&nbsp;&nbsp; // will be executed regardless</span></p>
</blockquote>

<p>Using the special rule above and by noting that the entire <span style="font-family: Courier New, Courier, monospace">if(...) { ... } else { ... }</span> is considered as a <em><u>single statement</u></em>, we can remove the curly bracket surrounding the else to create <span style="font-family: Courier New, Courier, monospace">else if</span>.</p>

<blockquote>
<p><span style="font-family: Courier New, Courier, monospace">if(cond) {<br>
&nbsp; // body<br>
} else if(cond) {<br>
&nbsp; // body<br>
}</span></p>
</blockquote>

<p><span style="font-family: Courier New, Courier, monospace">switch...case...</span> is not available in Python but available in JavaScript and Java.&nbsp; The structure is:</p>

<blockquote>
<p><span style="font-family: Courier New, Courier, monospace">switch(expression) { // evaluate the expression, e.g., x<br>
&nbsp; case value1:<br>
&nbsp;&nbsp;&nbsp; // executed if x == value1<br>
&nbsp;&nbsp;&nbsp; break; // without break, will "spillover" to next case<br>
&nbsp; case value2:<br>
&nbsp;&nbsp;&nbsp; // executed if x == value2<br>
&nbsp;&nbsp;&nbsp; break; // good practice to have break really...<br>
&nbsp; default:<br>
&nbsp;&nbsp;&nbsp; // executed if does not match other cases<br>
&nbsp;&nbsp;&nbsp; // this is optional, if not given then basically do nothing<br>
&nbsp;&nbsp;&nbsp; break; // ok, this one maybe no need, but good to have<br>
}</span></p>
</blockquote>

<p><em><u>Condition</u></em></p>

<p>Always evaluated to boolean (type is called <span style="font-family: Courier New, Courier, monospace">bool</span>, available in <span style="font-family: Courier New, Courier, monospace">stdbool.h</span>) which is either <span style="font-family: Courier New, Courier, monospace">true</span> or <span style="font-family: Courier New, Courier, monospace">false</span>.&nbsp; The typical relational operators are used.&nbsp; But be careful with "chaining".</p>

<ul>
	<li><span style="font-family: Courier New, Courier, monospace">2 &lt;= 9 &lt;= 5</span>: this is evaluated to true

	<ul>
		<li>Equivalent to <span style="font-family: Courier New, Courier, monospace">(2 &lt;= 9) &lt;= 5</span></li>
		<li>Since <span style="font-family: Courier New, Courier, monospace">(2 &lt;= 9)</span> is true, it becomes 1</li>
		<li>Then, we evaluate <span style="font-family: Courier New, Courier, monospace">1 &lt;= 5</span> which is again true, so it becomes 1</li>
	</ul>
	</li>
	<li>To check the range above, we use <span style="font-family: Courier New, Courier, monospace">(2 &lt;= 9) &amp;&amp; (9 &lt;= 5)</span>
	<ul>
		<li>May be best if you replace 9 with a variable x</li>
	</ul>
	</li>
</ul>

<p><em><u>Repetition</u></em></p>

<p><span style="font-family: Courier New, Courier, monospace">while-loop</span>&nbsp; similar to other languages.&nbsp; Check first before evaluate body.</p>

<blockquote>
<p><span style="font-family: Courier New, Courier, monospace">while(cond) {<br>
&nbsp; body<br>
}</span></p>
</blockquote>

<p><span style="font-family: Courier New, Courier, monospace">do-while-loop</span>&nbsp; executes the loop body at least once.&nbsp; Only check condition at the end.</p>

<blockquote>
<p><span style="font-family: Courier New, Courier, monospace">do {<br>
&nbsp; body;<br>
} while(cond);&nbsp; // &lt;-- there is a semicolon here!!</span></p>
</blockquote>

<p><span style="font-family: Courier New, Courier, monospace">for-loop</span>&nbsp; similar to JavaScript/Java for loop BUT very different from Python for loop.</p>

<blockquote>
<p><span style="font-family: Courier New, Courier, monospace">for(initialisation; condition; update) {<br>
&nbsp; body<br>
}</span></p>
</blockquote>

<p>Evaluation steps for for-loop:</p>

<ol>
	<li>Execute initialisation</li>
	<li>Check condition
	<ul>
		<li>If condition is false, exit</li>
		<li>Otherwise execute body</li>
		<li>Execute update</li>
		<li>Back to step (2)</li>
	</ul>
	</li>
	<li>Done (execute next statement if any)</li>
</ol>

<p>Loop allows break/continue</p>

<ul>
	<li><span style="font-family: Courier New, Courier, monospace">break</span>: exit the "nearest" loop</li>
	<li><span style="font-family: Courier New, Courier, monospace">continue</span>: go back to the beginning of "nearest" loop
	<ul>
		<li>In the case of for-loop, the update is going to be executed first!</li>
	</ul>
	</li>
</ul>

<p>&nbsp;</p>

<p><strong>Credit to: Adi</strong></p>
</span></katex></span></div>
`
const lecture_2_1 = `
<div _ngcontent-jlq-c92="" class="post-body show-scroll"><span _ngcontent-jlq-c92=""><katex _ngcontent-jlq-c92="" _nghost-jlq-c20=""><span _ngcontent-jlq-c20=""><p><strong>Workflow:</strong></p>

<blockquote>
<p>Edit -&gt; Compile -&gt; Execute</p>
</blockquote>

<p>If any error is encountered (e.g., compiler error or runtime error or logic error), repeat to first step (i.e., Edit) until correct.</p>

<p>&nbsp;</p>

<p><strong>General Form of C Program <em>(expanded)</em></strong></p>

<p><span style="font-family: Courier New, Courier, monospace">#preprocessor Directives<br>
int main(void) { // or int main()<br>
&nbsp; // (1.a) variable declaration<br>
&nbsp; // (1.b) input reading<br>
&nbsp; // (2)&nbsp;&nbsp; execution<br>
&nbsp; // (3)&nbsp;&nbsp; output result<br>
&nbsp; return 0;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; // do not forget<br>
}</span></p>

<ol>
</ol>

<p><strong>von Neumann Architecture</strong></p>

<p>Memory stores <u>both</u> program and data.&nbsp; (<em>an alternative is the program is outside of memory in a punchcard</em>).</p>

<p>&nbsp;</p>

<p><strong>Variables</strong></p>

<p>Must be declared with <u><em>data type</em></u>.&nbsp; Need not be initialised during declaration:</p>

<ul>
	<li>Without initialisation: <span style="font-family: Courier New, Courier, monospace">int x;</span>

	<ul>
		<li>Cross-reference common mistakes #1.</li>
	</ul>
	</li>
	<li>With initialisation: <span style="font-family: Courier New, Courier, monospace">int x = 123;</span></li>
</ul>

<p>Data types include:</p>

<ol>
	<li><span style="font-family: Courier New, Courier, monospace">int</span>: Integer (4 bytes)</li>
	<li><span style="font-family: Courier New, Courier, monospace">float</span>: Approximation of real numbers (4 bytes)</li>
	<li><span style="font-family: Courier New, Courier, monospace">double</span>: Approximation of real numbers (8 bytes)</li>
	<li><span style="font-family: Courier New, Courier, monospace">char</span>: Characters (1 byte)
	<ul>
		<li>Cross reference common mistakes #2.</li>
	</ul>
	</li>
</ol>

<p>&nbsp;</p>

<p><strong>Preprocessor Directives</strong></p>

<p><em>This was mainly from the QnA, where #define was asked</em>.</p>

<p><span style="font-family: Courier New, Courier, monospace">#define</span> works in a similar way to "replace-all" (<em>with some restrictions</em>).&nbsp; In the example, <span style="font-family: Courier New, Courier, monospace">#define KMS_PER_MILE 1.609</span>, there is <strong style = "background-color: yellow">NO variable created for <span style="font-family: Courier New, Courier, monospace">KMS_PER_MILE</span>.&nbsp; Instead, any occurrence of <span style="font-family: Courier New, Courier, monospace">KMS_PER_MILE</span> is going to be replaced by <span style="font-family: Courier New, Courier, monospace">1.609</span>.</strong></p>

<p>Restrictions: The replacement works at a "lexeme" level (<em>think of it like a word</em>).&nbsp; So, if we have "<span style="font-family: Courier New, Courier, monospace">KMS_PER_MILE12</span>", we will not replace this with "<span style="font-family: Courier New, Courier, monospace">1.60912</span>".&nbsp; Cross reference common mistakes #3.</p>

<p>&nbsp;</p>

<p><strong>Common Mistakes</strong></p>

<ol>
	<li>Assuming that a variable is initialised to a value at declaration (e.g., <span style="font-family: Courier New, Courier, monospace">int x;</span> here, the value of x is unknown).

	<ul>
		<li>This is marked with ? in the diagram.</li>
	</ul>
	</li>
	<li>Characters must be a single character and enclosed within a single quote.
	<ul>
		<li>Exception for <em><u>escaped character</u></em> (<em>i.e.,</em> special characters starting with backslash $.</li>
		<li>Double quote is used for string.</li>
		<li>Common mistake if you are coming from either JavaScript or Python where string can be enclosed in both single quote or double quote.</li>
	</ul>
	</li>
	<li>Replacement for <span style="font-family: Courier New, Courier, monospace">#define</span> works at a lexeme level.</li>
</ol>

<p>&nbsp;</p>

<p><strong>Adi</strong></p>
</span></katex></span></div>
`
const lecture_3 = `
<div _ngcontent-jlq-c92="" class="post-body show-scroll"><span _ngcontent-jlq-c92=""><katex _ngcontent-jlq-c92="" _nghost-jlq-c20=""><span _ngcontent-jlq-c20=""><p><strong>Base-R to Decimal Conversion</strong></p>

<p>Use <u>weight-positional</u> system.&nbsp; The <em>position</em> is computed from the decimal point (<em>i.e., the dot</em>).&nbsp; Starting from the dot:</p>

<ul>
	<li>The digit to the left of the dot is position 0 (<em>like a true computer scientist, we start from 0</em>)

	<ul>
		<li>Moving to the left, we add 1 to the position</li>
	</ul>
	</li>
	<li>The digit to the right of the dot is position -1
	<ul>
		<li>Moving to the right, we subtract 1 from the position</li>
	</ul>
	</li>
</ul>

<p>(a<sub>n</sub> a<sub>n-1</sub> ... a<sub>o</sub> . a<sub>-1</sub> a<sub>-2</sub> ... a<sub>-m</sub>)<sub>b</sub> = (a<sub>n</sub> × b<sup>n</sup>) + (a<sub>n-1</sub> × b<sup>n-1</sup>) + ... + (a<sub>0</sub> × b<sup>0</sup>) + (a<sub>-1</sub> × b<sup>-1</sup>) + (a<sub>-2</sub> × b<sup>-2</sup>) + ... + (a<sub>-m</sub> × b<sup>-m</sup>)</p>

<p>&nbsp;</p>

<p><strong>Decimal to Base-R Conversion</strong></p>

<p>First, we represent a number as (<em>whole . fraction</em>) where the dot is the decimal point.&nbsp; There are two different methods, depending on whether we are converting the <em>whole</em> or the <em>fraction</em> part.</p>

<ul>
	<li><strong>Whole:</strong> <u>Repeated division-by-R</u>

	<ul>
		<li>Successively divide the value by R until the quotient is 0.</li>
		<li>The remainders form the answer, with the first remainder as the <em>least significant digit (LSD)</em> and the last as the <em>most significant digit (MSD)</em>.
		<ul>
			<li>In other words, read bottom-up.</li>
		</ul>
		</li>
	</ul>
	</li>
	<li><strong>Fraction:</strong> Repeated multiplication-by-R
	<ul>
		<li>Successive multiply the value by R until the <em>fractional</em> product is 0 (<em>or until the desired number of decimal places</em>).</li>
		<li>The carried digits (<em>or carries</em>) produce the answer with the first carry as the <em>most significant digit (MSD)</em> and the last as the <em>least significant digit</em> <em>(LSD)</em>
		<ul>
			<li>In other words, read top-down.</li>
		</ul>
		</li>
	</ul>
	</li>
</ul>

<p>&nbsp;</p>

<p><strong>Base-R1 to Base-R2 Conversion</strong></p>

<p>We have only learnt how to convert to and from decimal.&nbsp; So, we use this and create a two-step conversion:</p>

<ol>
	<li>Convert base-R1 to decimal</li>
	<li>Convert decimal to base-R2</li>
</ol>

<p>For numbers that belong to the same exponential groups (<em>i.e.,</em> R1<sup>n</sup> = R2 for some value of n &gt; 1), we can do a quick conversion from base-R1 to base-R2 by:</p>

<ol>
	<li>Grouping the digits n-by-n starting from the left and right of the dot (<em>i.e.,</em> the dot should not belong to any group).</li>
	<li>Convert group-by-group.</li>
</ol>

<p>The conversion from base-R2 to base-R1 is even simpler, just convert each digit.&nbsp; This is easier for base 2 but might not be easy for other bases (<em>e.g., base-3 to base-9</em>).</p>

<p>&nbsp;</p>

<p><strong>ASCII Code</strong></p>

<p>ASCII code is basically a <em><u>convention</u></em>.&nbsp; We need ASCII because we need to represent all the printable characters.&nbsp; As such, even if we have binary for 0, 1, ..., 9, we still need a character for '0', '1', ..., '9'.</p>

<p>You can ignore parity bit but you may read them on <a href="https://en.wikipedia.org/wiki/Parity_bit" target="_blank">Wikipedia</a>.</p>

<p>&nbsp;</p>

<p><strong>Negative Numbers</strong></p>

<p>This is a summary table.&nbsp; Here, - means the operation is too complex to be summarised.</p>

<table border="1" style="width: 100%">
	<thead>
		<tr>
			<th scope="row">Operations</th>
			<th scope="col">Sign-and-Magniture</th>
			<th scope="col">1s Complement</th>
			<th scope="col">2s Complement</th>
			<th scope="col">Excess-N</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">Check Negative</th>
			<td>Check LSB</td>
			<td>Check LSB</td>
			<td>Check LSB</td>
			<td><em>-</em></td>
		</tr>
		<tr>
			<th scope="row">Negation</th>
			<td>Invert LSB</td>
			<td>Invert all bits</td>
			<td>Invert all bits; Add 1</td>
			<td>-</td>
		</tr>
		<tr>
			<th scope="row">Addition</th>
			<td>-</td>
			<td>Binary addition; Add carry; Truncate; Check overflow</td>
			<td>Binary addition; Truncate; Check overflow</td>
			<td>-</td>
		</tr>
		<tr>
			<th scope="row">Subtraction</th>
			<td>-</td>
			<td>A - B = A + (-B)</td>
			<td>A - B = A + (-B)</td>
			<td>-</td>
		</tr>
		<tr>
			<th scope="row">Comparison</th>
			<td>-</td>
			<td>-</td>
			<td>-</td>
			<td>Binary comparison</td>
		</tr>
	</tbody>
</table>

<p>&nbsp;</p>

<p><em><u>Check Overflow</u></em></p>

<p>There is an overflow (for 1s complement and 2s complement) if <em><u>one of the following occurs</u></em>:</p>

<ul>
	<li>Positive + Positive = Negative</li>
	<li>Negative + Negative = Positive</li>
</ul>

<p>On the other hand, Positive + Negative and Negative + Positive will never produce overflow.</p>

<p>&nbsp;</p>

<p><strong>Floating-Point Representation</strong></p>

<p>Bit arrangement:</p>

<blockquote>
<p><span style="font-family: Courier New, Courier, monospace">+------+----------+-------------+<br>
| sign | exponent |&nbsp;&nbsp; mantissa&nbsp; |<br>
+------+----------+-------------+</span></p>
</blockquote>

<p>Two formats:</p>

<ol>
	<li>Single-precision (32-bits)
	<ul>
		<li><strong>Sign: </strong>1-bit</li>
		<li><strong>Exponent: </strong>8-bit (<em>Excess-127</em>)</li>
		<li><strong>Mantissa: </strong>23-bit (<em>normalised with implicit leading bit 1</em>)</li>
	</ul>
	</li>
	<li>Double-precision (64-bits)
	<ul>
		<li><strong>Sign: </strong>1-bit</li>
		<li><strong>Exponent: </strong>11-bit (<em>Excess-1023</em>)</li>
		<li><strong>Mantissa: </strong>52-bit (<em>normalised with implicit leading bit 1</em>)</li>
	</ul>
	</li>
</ol>

<p>You do not have to remember the number of bits for all because you can always compute the remaining bits to make up the total.</p>

<p>How to convert to IEEE 754?&nbsp; Given a number f, we represent the magnitude by |f|.&nbsp; This |f| is always positive.&nbsp; Then there are 4 steps:</p>

<ol>
	<li>Convert |f| to binary.
	<ul>
		<li>Repeated multiplication/division by 2</li>
	</ul>
	</li>
	<li>Normalise to the form of ± 1.mantissa&nbsp;× 2<sup>exponent</sup></li>
	<li>Find all the components:
	<ul>
		<li><strong>Sign: </strong>0 if + and 1 if -</li>
		<li><strong>Exponent: </strong>convert 127+exponent to binary</li>
		<li><strong>Mantissa: </strong>ignore the implicit leading bit and pad 0s to the right until 23-bit wide</li>
	</ul>
	</li>
	<li>Combine all to form the bits.
	<ul>
		<li>You may also want to convert to hexadecimal using the group by 4 technique.</li>
	</ul>
	</li>
</ol>

<p>&nbsp;</p>

<p><strong>Adi</strong></p>
</span></katex></span></div>
`
const lecture_4 = `
<div _ngcontent-jlq-c92="" class="post-body show-scroll"><span _ngcontent-jlq-c92=""><katex _ngcontent-jlq-c92="" _nghost-jlq-c20=""><span _ngcontent-jlq-c20=""><p><strong>Variable</strong></p>

<p>Basic principle:</p>

<blockquote>
<p>Variable has 4 attributes:</p>

<ol>
	<li>Name</li>
	<li>Data type</li>
	<li>Address</li>
	<li>Value</li>
</ol>
</blockquote>

<p>&nbsp;</p>

<p><strong>Pointer</strong></p>

<p>Pointer variable is simply a "<u><em>variable that stores address</em></u>".&nbsp; In other words, the value (<em>i.e.,</em> attribute #4) is treated as an address --<em>hopefully of another variable</em>-- (<em>i.e.,</em> attribute #3).</p>

<p>Everything below is a <em><u>consequence</u></em> of this simple fact.</p>

<p><em><u>Declaring a Pointer Variable</u></em></p>

<p>Use the <span style="font-family: Courier New, Courier, monospace">*</span> during declaration:&nbsp; <span style="font-family: Courier New, Courier, monospace">int *a_ptr;</span>&nbsp; means that <span style="font-family: Courier New, Courier, monospace">a_ptr</span> is a variable (<em>i.e.,</em> it has all 4 attributes) and the value (<em>i.e., </em>attribute #4) is an address of a variable (<em>or a box</em>) that should contain an integer.</p>

<p><em><u>Using a Pointer Variable</u></em></p>

<p>We can "dereference" a pointer variable (<em>i.e., </em><u>follow the arrow once you have drawn the box-and-arrow diagram</u>) using the same <span style="font-family: Courier New, Courier, monospace">*</span> symbol.</p>

<blockquote>
<p><span style="font-family: Courier New, Courier, monospace">*</span> during variable declaration means <em><u>we are declaring a pointer</u></em>.</p>

<p><span style="font-family: Courier New, Courier, monospace">*</span> outside of varibale declaration means <em><u>we are dereferencing the pointer</u></em>.</p>
</blockquote>

<p>&nbsp;</p>

<p><strong>Function</strong></p>

<p>We will use the following example function definition:</p>

<blockquote>
<p><span style="font-family: Courier New, Courier, monospace">int foo(int x, int y) {<br>
&nbsp; return x + y;<br>
}</span></p>
</blockquote>

<p>We will also use the following example function call:</p>

<blockquote>
<p><span style="font-family: Courier New, Courier, monospace">foo(a, 2);</span></p>
</blockquote>

<p>We will then use the following terminology:</p>

<ul>
	<li><strong>Parameters:</strong> The "formal parameter" of a function as defined.

	<ul>
		<li>In this case, the parameter of <span style="font-family: Courier New, Courier, monospace">foo</span> are <span style="font-family: Courier New, Courier, monospace">x</span> and <span style="font-family: Courier New, Courier, monospace">y</span>.</li>
	</ul>
	</li>
	<li><strong>Arguments:</strong> The "actual parameter" of a function when the function is called.
	<ul>
		<li>In this case, the arguments are <span style="font-family: Courier New, Courier, monospace">a</span> and <span style="font-family: Courier New, Courier, monospace">2</span>.</li>
	</ul>
	</li>
</ul>

<p>&nbsp;</p>

<p><strong>Function Prototype</strong></p>

<p>A function prototype <em>minimally</em> contains the following information:</p>

<ol>
	<li>The return type</li>
	<li>The parameter types (<em>if any</em>)</li>
	<li>The function name</li>
</ol>

<p>Implicitly, we also know <em><u>how many arguments the function takes</u></em>.&nbsp; The syntax is as follows:</p>

<blockquote>
<p><span style="font-family: Courier New, Courier, monospace">&lt;return type&gt; &lt;function name&gt; (&lt;param1 type&gt;, &lt;param2 type&gt;, ...);</span></p>
</blockquote>

<p>Do NOT forget to terminate with a semi-colon.&nbsp; This allows the compiler to check for "type consistency" which can be described as follows:</p>

<blockquote>
<p>When a function is being called (<em>e.g.,</em> <span style="font-family: Courier New, Courier, monospace">z = foo(x,y);</span>) the compiler can check the following:</p>

<ul>
	<li>Can <span style="font-family: Courier New, Courier, monospace">foo</span> really accept <span style="font-family: Courier New, Courier, monospace">x</span> (<em>of known type</em>) and <span style="font-family: Courier New, Courier, monospace">y</span> (<em>of known type</em>) by checking the accepted type in function prototype.

	<ul>
		<li>Implicitly, we can check whether <span style="font-family: Courier New, Courier, monospace">foo</span> really accept two arguments.</li>
	</ul>
	</li>
	<li>Can variable <span style="font-family: Courier New, Courier, monospace">z</span> accept the return value of the function <span style="font-family: Courier New, Courier, monospace">foo</span> by checking the return type in function prototype.</li>
</ul>
</blockquote>

<p>The name of the parameters (<em>or formal parameters</em>) <u><em>can be ignored</em></u> and <u><em>can be different from the name in the function definition</em></u> (<em>see below</em>).</p>

<p>&nbsp;</p>

<p><strong>Function Definition</strong></p>

<p>The template is as follows:</p>

<blockquote>
<p><span style="font-family: Courier New, Courier, monospace">&lt;return type&gt; &lt;function name&gt; (&lt;param1 type&gt; &lt;param1 name&gt;, &lt;param2 type&gt; &lt;param2 name&gt;, ...) {<br>
&nbsp; &lt;function body&gt;;<br>
}</span></p>
</blockquote>

<p><em><u>Scope</u></em></p>

<ol>
	<li><strong>Local Variables</strong>

	<ul>
		<li>A variable declared within a function F can only be used within the function F.</li>
		<li>The parameters (<em>i.e.,</em> formal parameters) of the function F can only be used within the function F.</li>
	</ul>
	</li>
	<li><strong>Global Variables</strong>
	<ul>
		<li>A variable declared <em><u>outside</u></em> of any function can be used within any function in the program (<em>i.e.,</em> within the C file).</li>
	</ul>
	</li>
</ol>

<p>What is nice here is that unlike JavaScript and/or Python, we <em><u>do <strong>NOT</strong> have nested function</u></em>.&nbsp; So the two rules above are simplified.</p>

<p>&nbsp;</p>

<p><strong>Function Call</strong></p>

<p>There are 4 steps to a function call:</p>

<ol>
	<li>Evaluate argument (<em>i.e.,</em> actual parameter).</li>
	<li>Pass-by-value:
	<ul>
		<li>Basically, copy the argument (<em>i.e.,</em> actual parameter) to the parameter (<em>i.e., </em>formal parameter) <em><u>based on the position</u></em>.</li>
		<li>For instance, in the case of <span style="font-family: Courier New, Courier, monospace">foo(a, 2)</span> above where we have <span style="font-family: Courier New, Courier, monospace">int foo(int x, int y) { ... }</span>, we basically say that:
		<ul>
			<li><span style="font-family: Courier New, Courier, monospace">x = a; // i.e., copy the value of a to x</span></li>
			<li><span style="font-family: Courier New, Courier, monospace">y = 2; // i.e., copy the value of 2 to y</span></li>
		</ul>
		</li>
	</ul>
	</li>
	<li>Evaluate function body.</li>
	<li>Return-by-value:
	<ul>
		<li>This is only applicable if there is an actual return value.</li>
		<li>The mechanism is the same as before, we <em><u><strong>copy</strong></u></em>.</li>
	</ul>
	</li>
</ol>

<p>&nbsp;</p>

<p><strong>Function + Pointer</strong></p>

<p>The implication of pass-by-value (<em>i.e., copying the value from argument to parameter</em>) + the scoping rule (<em>i.e., local vs global</em>) is that a function cannot change the value of a variable declared in another function <em><u>directly</u></em>.&nbsp; But a function can accept a pointer, in which case, using <em><u>dereferencing</u></em>, we can change the value <em><u>indirectly</u></em>.</p>

<p>This is exemplified by the two functions:</p>

<blockquote>
<p><span style="font-family: Courier New, Courier, monospace">void incorrect_swap(int x, int y) {<br>
&nbsp; int temp;<br>
&nbsp; temp = x;<br>
&nbsp; x = y;<br>
&nbsp; y = temp;<br>
}</span></p>

<p>&nbsp;</p>

<p><span style="font-family: Courier New, Courier, monospace">void correct_swap(int *ptr1, int *ptr2) {<br>
&nbsp; int temp;<br>
&nbsp; temp = *ptr1;<br>
&nbsp; *ptr1 = *ptr2;<br>
&nbsp; *ptr2 = *ptr1;<br>
}</span></p>
</blockquote>

<p><span style="font-family: Courier New, Courier, monospace">incorrect_swap</span> does not work while <span style="font-family: Courier New, Courier, monospace">correct_swap</span> works.</p>

<p>&nbsp;</p>

<p>Adi</p>
</span></katex></span></div>
`
const MA1521 = () => {
  return (
    <div className="MA1521">
      <h1>MA1521 Note:</h1>
      <div className="path_content">
        <h3>Lecture 2</h3>
        <ToHtml>{lecture_2_1}</ToHtml>
        <ToHtml>{lecture_2_2}</ToHtml>
        <h3>Lecture 3</h3>
        <ToHtml>{lecture_3}</ToHtml>
        <h3>Lecture 4</h3>
        <ToHtml>{lecture_4}</ToHtml>
      </div>
    </div>
  )
}

export default MA1521
