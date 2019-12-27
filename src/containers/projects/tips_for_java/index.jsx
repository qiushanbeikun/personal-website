import './style.css';

import React from "react";

export default function TipsForJava() {
    return (
        <div>
            <h1> JAVA Tips? </h1>
            <div>
                <h3> JAVA is the first programming language I learn, by my limited experience on JAVA, here are some
                    tips u might need to know in an interview. </h3>
                <h3> If there is any error in this page, please contact me for correction. Thanks. </h3>
                <p> Reference list:</p>
                <a href="https://mp.weixin.qq.com/s/IBbD3CmVWsTL9ymHg6gGGA"
                   target="_blank">https://mp.weixin.qq.com/s/IBbD3CmVWsTL9ymHg6gGGA</a>
                <a href="https://en.wikibooks.org/wiki/Java_Programming"
                   target="_blank">https://en.wikibooks.org/wiki/Java_Programming</a>
                <a href="https://en.wikipedia.org/wiki/Thread_safety"
                   target="_blank">https://en.wikipedia.org/wiki/Thread_safety</a>
                <a href="https://www.cnblogs.com/NeilZhang/p/8623207.html"
                   target="_blank">https://www.cnblogs.com/NeilZhang/p/8623207.html</a>
            </div>

            <div>
                <h3> 1. JDK and JRE? </h3>
                <ul>
                    <li> JDK is Java Development Kit and JRE is Java Runtime Environment.</li>
                    <li> JDK offers both development environment and runtime environment. Thus, in some way, JDK >= JRE,
                        JDK = JRE + javac, where javac is the compiler.
                    </li>
                    <li> In summary, if u want to write codes in JAVA, u need to install JDK, if u just need to run Java
                        code, JRE will be enough.
                    </li>
                </ul>
            </div>


            <div>
                <h3> 2. FINAL ? </h3>
                <ul>
                    <li> Final variable must be initiated and cannot be changed.</li>
                    <li> Final methods cannot be overrided.</li>
                    <li> Final classes cannot be extended, all the methods in a final class are also final. Adding
                        "final" for methods in a final class is permitted but meaningless.
                    </li>

                </ul>
            </div>

            <div>
                <h3> 3. Primary type ? </h3>
                <p> Java has 8 primary types: </p>
                <ul>
                    <li>Integer : byte, char, short, int, long</li>
                    <li>Floating point: float, double</li>
                    <li>Others: boolean, void</li>
                </ul>
                <p>Note: string is NOT a primary type</p>
                <b>3.1 int and Integer ?</b>
                <ul>
                    <li>int is a primary type while Integer is wrapped class.</li>
                    <li>int can only store the binary value of an integer, Integer has much wider muliputation access
                        than int: storing, converting, casting.
                    </li>

                </ul>
                <b>3.2 Float nad double ?</b>
                <p>Both float and double are floating point type which means they are used for storing "fractional
                    numbers" like 3.1415, 1/3, 10.0000. The difference is that float takes 4 bytes and double takes 8
                    bytes, which leads them to different precision.</p>
            </div>

            <div>
                <h3>4. Primary type and wrapped type?</h3>
                <p>a ) </p>
                <p>Wrapped type can be used for random type.</p>
                <div>
                    <p>!--some codes that will conflicts html</p>
                </div>

            </div>

            <div>
                <h3> 5. Equals?</h3>
                <p>There are two types of equal in JAVA: == and equals().</p>
                <p>For ==, for primary types, == will just compare value:
                </p>
                <div>
                <pre>
                    <code>
                        int a = 1;
                        int b = 2;
                    sout(a==b); // true
                    for references types, == will compare the reference:
                    String a = "123";
                    String b = "123";
                    sout(a==b); // true
                    String c = new string("123");
                    String d = new string("123");
                    sout(a==c); // true
                    sout(a==d); // false, a will be allocated to Constant Pool, while c and d will be allocated to heap memory, thus
                    sout(c==d); // false
                    </code>
                </pre>
                </div>
                <p>however:</p>
                <div>
                    <pre><code>sout(c.equals(d)); // true w? h? y?</code></pre>
                </div>

                <p>for THIS equals():</p>

                <div>
                    <p> // some code block conflicts html</p>
                </div>
                <p>By the source code of equals on string, it's actually rewritten the equals to make it comparing the
                    value rather than the reference.</p>
                <p>However, for other types:</p>
                <div>
                    <pre>
                        <code>
                            TypeA a = new TypeA("12");
                    TypeA b = new TypeA("12");
                    sout(a.equals(b)); // false why??
                        </code>
                    </pre>
                </div>

                <p>Because for types other than string, Integer, Java did not override the equals() method to make them
                    comparing value;</p>
                <div>
                <pre>
                    <code>
                        public boolean equals(Object obj)
                        return (this == obj);
                    </code>
                </pre>
                </div>

            </div>

            <div>
                <h3>6. Thread safety, and unsafe?</h3>
                <p>Definition from wikipedia: Thread safety is a computer programming concept applicable to multi-threaded code. Thread-safe code only manipulates shared data structures in a manner that ensures that all threads behave properly and fulfill their design specifications without unintended interaction. There are various strategies for making thread-safe data structures.</p>
                <p>It did took me some time to understand, here is an example:</p>
                <pre>
                    <code>
                        public class ThreadSafeExample
                        public static boolean condition = true;
                        public static void main(string[] args) {
                        // run();
                    }
                        static void run()
                        if (condition)
                        sout("should print only once!");
                        this.boolean = false;
                    }
                    }
                    }
                    </code>
                </pre>

                <p>in the first time call to run(), the code will print the message, but for the second time, it will not. For the case that run() is called in parallel by multiple threads, assume the first thread has executed just passed the sout and before change value of boolean, the second thread comes in and go through the if-statement. The message will be printed twice, which makes the code thread unsafe.</p>
                <p>In Java, thread safety is reflected on different types:</p>
                <h1 specialUse = "todo">TODO ADD THE LIST</h1>
            </div>

            <div>
                <h3>6.1 String and StringBuffer, StringBuilder</h3>

                <p>A string statement will initiate new object and unchangeable object, while the later two will only operate on exiting objects. Thus string is not recommanded when lots of modification string content exists.</p>
                <p>As StringBuffer is thread safe and StringBuilder is thread unsafe, thus StringBuffer is pro multi thread environment and StringBuilder is pro single thread environment.</p>

            </div>

            <div>
                <h3>7. Common string methods?</h3>
                <ul>
                    <li> <code>indexOf(int ch)</code>  return the index of the first occurrence of specific character, -1 if not occurred</li>
                    <li><code>indexOf(int ch, int fromIndex)</code>  return the first occurrence of specific character after given index position</li>
                    <li><code>indexOf(String str)</code>  return the index of str</li>
                    <li><code>indexOf(String str, int fromIndex)</code>  return the index of str after given index position</li>
                    <li><code>charAt(int index)</code>  return the character at specific index position</li>
                    <li><code>indexOf(String str)</code>  replace ALL occurrence of oldStr to newStr</li>
                    <li><code>trim()</code>  delete whitespace at either ends of the string</li>
                    <li><code>split(String divider)</code>  // eg: ("1/2/3/4/5").split("/") returns ["1", "2", "3", "4", "5"]</li>
                </ul>
            </div>

            <div>
                <h3>8. Abstract class?</h3>
                <p>Only abstract class can have abstract methods, however, abstract method is not mandatory for abstract class.</p>
                <p>Abstract class cannot be instantiated.</p>
                <p>Abstract class cannot be "final"-ed. // referes to 2, final class cannot be extended, while abstract class must have normal classes to extend</p>
            </div>

            <div>
                <h3>8.1 Abstract and interface?</h3>
                <p>a) extends AbstractClass / implements Interface</p>
                <p>b) constructor method: Abstract(√)   / Interface (×)</p>
                <p>c) one class can implement multiple interface but can extend only one abstract class</p>
                <p>d) access field: Interface: public by default / Abstract: can be any</p>
            </div>

        </div>
    )
}